import React from 'react';
import './GuidesStyle.css';
import one from './Images/Buckets/1.png'
import two from './Images/Buckets/1.png'




export const BucketsGuide = () => {
    return (
        <div className='guide-container'>
            <h1>Buckets Guide</h1>

            <div className="guide-text-block">
                <h3>Public buckets allow C2 to upload files and distribute them anywhere. By default, they run on port 80.</h3>
                <img srcSet={one} alt="buckets panel" srcset="" />
                <p>These buckets are also useful for fetching payloads.</p>
            </div>

        </div>
    );
};
