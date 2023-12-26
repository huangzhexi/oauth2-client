// Profile.js
import React from 'react';
import './profile.css';

const Profile = () => {
    // Assume we have a user object
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Software developer at XYZ company.'
    };

    return (
        <div className="profile">
            <h2 className="profile-title">Profile</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Bio:</strong> {user.bio}</p>
        </div>
    );
};

export default Profile;