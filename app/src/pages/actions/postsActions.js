import axios from 'axios';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';

export const fetchPostsRequest = () => {
    return {
        type: FETCH_POSTS_REQUEST
    }
}

export const fetchPostsSuccess = (posts) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

export const fetchPostsFailure = (error) => {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error
    }
}

export const createPostRequest = () => {
    return {
        type: CREATE_POST_REQUEST
    }
}

export const createPostSuccess = (post) => {
    return {
        type: CREATE_POST_SUCCESS,
        payload: post
    }
}

export const createPostFailure = (error) => {
    return {
        type: CREATE_POST_FAILURE,
        payload: error
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchPostsRequest());
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data;
                dispatch(fetchPostsSuccess(posts));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchPostsFailure(errorMsg));
            })
    }
}

export const createPost = (post) => {
    return (dispatch) => {
        dispatch(createPostRequest());
        axios.post('https://jsonplaceholder.typicode.com/posts', post)
            .then(response => {
                const newPost = response.data;
                dispatch(createPostSuccess(newPost));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(createPostFailure(errorMsg));
            })
    }
}

const addReaction = (postId, reaction) => {
    return {
        type: 'ADD_REACTION',
        payload: {
            postId,
            reaction
        }
    }
};

export default addReaction;