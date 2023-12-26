import React, { useState } from 'react';
import './security.css';

const Security = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Update the password
        console.log(`New password: ${newPassword}`);
    };

    return (
        <div className="security">
            <h2>Security</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Original password:
                    <input type="password" value={password} onChange={handlePasswordChange} className="input-field" />
                </label>
                <label>
                    New password:
                    <input type="password" value={newPassword} onChange={handleNewPasswordChange} className="input-field" />
                </label>
                <button type="submit" className="submit-button">Update</button>
            </form>
        </div>
    );
};

export default Security;





