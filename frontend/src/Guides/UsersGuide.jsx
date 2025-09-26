import React from 'react';
import './GuidesStyle.css';
import one from './Images/Admin/1.png'



export const UsersGuide = () => {
    return (
        <div className='guide-container'>
            <h1>Users Guide</h1>

            <div className="guide-text-block">
                <h3>Create and Modify Users</h3>
                <p>You can create and modify users in the C2 server using the Admin panel. The C2 server has two roles: admin and hacker.</p>
            </div>
            <div className="guide-text-block">
                <img srcSet={one} alt="admin panel" srcset="" />
                <p>Admin privileges allow you to:</p>
                <ul>
                    <li>Create and modify users</li>
                    <li>Create buckets and upload files</li>
                    <li>Add operation commands</li>
                </ul>
            </div>

        </div>
    );
};
