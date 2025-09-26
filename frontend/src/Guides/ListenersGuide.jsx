import React from 'react';
import './GuidesStyle.css';
import panel from './Images/Listeners/1.png'
import data from './Images/Listeners/2.png'
import ssl from './Images/Listeners/3.png'



export const ListenersGuide = () => {
    return (
        <div className='guide-container'>
            <h1>Listeners Guide</h1>

            <div className="guide-text-block">
                <h3>Create Listener</h3>
                <img srcSet={panel} alt="panel" srcset="" />
            </div>
            <div className="guide-text-block">
                <h3>Listener Data</h3>
                <p>In the listener form, only x64 architectures are available for now. You should specify:</p>
                <ul>
                    <li>Your C2C domain</li>
                    <li>Interface bind address</li>
                    <li>Port</li>
                    <li>If you want an SSL connection, you must upload cert.pem and key.pem</li>
                </ul>
                <img srcSet={data} alt="listener data" srcset="" />
            </div>
            <div className="guide-text-block">
                <h3>SSL</h3>
                <img srcSet={ssl} alt="SSL configuration" srcset="" />
            </div>

        </div>
    );
};
