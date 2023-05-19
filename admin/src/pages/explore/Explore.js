import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPosts, createPost } from '../actions/postsActions';
import { addReaction } from '../actions/postsActions';
import Post from '../components/Post';
import TrendingTopics from '../components/TrendingTopics';
import SearchBar from '../components/SearchBar';
import UserCard from '../components/UserCard';
import Modal from '../components/Modal';
import Loader from '../components/Loader';
import './Explore.scss';

const TwitterHomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [postText, setPostText] = useState('');
    const [postImage, setPostImage] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [reactionType, setReactionType] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { posts, isLoading } = useSelector((state) => state.posts);
    const { currentUser } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const handleAddPostOrImage = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setPostText('');
        setPostImage(null);
    };

    const handlePostTextChange = (event) => {
        setPostText(event.target.value);
    };

    const handlePostImageChange = (event) => {
        setPostImage(event.target.files[0]);
    };

    const handlePostSubmit = (event) => {
        event.preventDefault();
        dispatch(createPost({ text: postText, image: postImage }));
        setIsModalOpen(false);
        setPostText('');
        setPostImage(null);
    };

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleReactionClick = (postId, type) => {
        dispatch(addReaction(postId, type));
    };

    const filteredPosts = posts.filter((post) =>
        post.text.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="container">
            <header>
                <h1>Twitty</h1>
                <button onClick={handleAddPostOrImage}>Add Post or Image</button>
                <SearchBar value={searchText} onChange={handleSearchChange} />
            </header>
            <main>
                <div className="left-column">
                    <UserCard user={currentUser} />
                    <TrendingTopics />
                </div>
                <div className="right-column">
                    {isLoading ? (
                        <Loader />
                    ) : (
                        filteredPosts.map((post) => (
                            <Post
                                key={post.id}
                                post={post}
                                onReactionClick={handleReactionClick}
                            />
                        ))
                    )}
                </div>
            </main>
            {isModalOpen && (
                <Modal onClose={handleModalClose}>
                    <h2>Add Post or Image</h2>
                    <form onSubmit={handlePostSubmit}>
                        <label htmlFor="post-text">Post text:</label>
                        <textarea
                            id="post-text"
                            value={postText}
                            onChange={handlePostTextChange}
                        />
                        <label htmlFor="post-image">Post image:</label>
                        <input
                            type="file"
                            id="post-image"
                            accept="image/*"
                            onChange={handlePostImageChange}
                        />
                        <button type="submit">Post</button>
                    </form>
                </Modal>
            )}
        </div>
    );
};

export default TwitterHomePage;