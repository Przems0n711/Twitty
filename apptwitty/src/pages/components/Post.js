import React, { useState } from 'react';

const Post = ({ post }) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className="post">
            <div className="post-header">
                <img className="avatar" src={post.user.avatarUrl} alt={post.user.name} />
                <div className="post-info">
                    <h2 className="post-author">{post.user.name}</h2>
                    <p className="post-date">{post.createdAt.toLocaleDateString()}</p>
                </div>
            </div>
            <p className="post-text">{post.text}</p>
            <img className="post-image" src={post.imageUrl} alt="" />
            <div className="post-footer">
                <button className={`like-button ${isLiked ? 'liked' : ''}`} onClick={handleLikeClick}>
                    <i className="fas fa-heart"></i>
                    <span className="like-count">{post.likes}</span>
                </button>
            </div>
        </div>
    );
};

export default Post;