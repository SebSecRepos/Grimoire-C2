import React from 'react';
import './GuidesStyle.css';
import panel from './Images/Implants/1.png'
import data from './Images/Implants/2.png'
import data2 from './Images/Implants/3.png'
import data4 from './Images/Implants/4.png'



export const ImplantsGuide = () => {
    return (
        <div className='guide-container'>
            <h1>Implants Guide</h1>

            <div className="guide-text-block">
                <p>Before creating an implant, you must create a session key. Session keys authorize implants to connect with the C2 server.</p>
                <img srcSet={data4} alt="panel" srcset="" />
                <h3>Create Implant</h3>
                <img srcSet={panel} alt="panel" srcset="" />
            </div>
            <div className="guide-text-block">
                <h3>Implant Data</h3>
                <p>You must specify:</p>
                <ul>
                    <li>Listener</li>
                    <li>Operating system</li>
                    <li>Type (Executable or Python script)</li>
                    <li>Only x64 architectures are available</li>
                    <li>Session key</li>
                    <li>Group</li>
                </ul>
                <img srcSet={data} alt="implant data" srcset="" />
            </div>
            <div className="guide-text-block">
                <img srcSet={data2} alt="raw binary implants" srcset="" />
                <p>Raw binary implants are only available for Windows systems. You can read more about this in the Stagers section.</p>
            </div>

        </div>
    );
};
