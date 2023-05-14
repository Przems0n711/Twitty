export const FETCH_TRENDING_TOPICS_REQUEST = 'FETCH_TRENDING_TOPICS_REQUEST';
export const FETCH_TRENDING_TOPICS_SUCCESS = 'FETCH_TRENDING_TOPICS_SUCCESS';
export const FETCH_TRENDING_TOPICS_FAILURE = 'FETCH_TRENDING_TOPICS_FAILURE';
export const UPDATE_TRENDING_TOPICS = 'UPDATE_TRENDING_TOPICS';

export const fetchTrendingTopicsRequest = () => {
    return {
        type: FETCH_TRENDING_TOPICS_REQUEST
    };
};

export const fetchTrendingTopicsSuccess = (topics) => {
    return {
        type: FETCH_TRENDING_TOPICS_SUCCESS,
        payload: topics
    };
};

export const fetchTrendingTopicsFailure = (error) => {
    return {
        type: FETCH_TRENDING_TOPICS_FAILURE,
        payload: error
    };
};

export const updateTrendingTopics = (topics) => {
    return {
        type: UPDATE_TRENDING_TOPICS,
        payload: topics
    };
};

// Async action creator to fetch trending topics
export const fetchTrendingTopics = () => {
    return (dispatch) => {
        dispatch(fetchTrendingTopicsRequest());
        fetch('https://api.example.com/trending-topics')
            .then(response => response.json())
            .then(data => {
                dispatch(fetchTrendingTopicsSuccess(data));
            })
            .catch(error => {
                dispatch(fetchTrendingTopicsFailure(error.message));
            });
    };
};