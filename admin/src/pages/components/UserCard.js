import React from 'react';

const UserCard = ({ user }) => {
    return (
        <div className="user-card">
            <img src={user.avatarUrl} alt={user.name} />
            <div className="user-info">
                <h2>{user.name}</h2>
                <p>{user.bio}</p>
            </div>
        </div>
    );
};

export default UserCard;