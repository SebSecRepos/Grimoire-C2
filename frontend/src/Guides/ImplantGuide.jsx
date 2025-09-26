import React from 'react';
import './GuidesStyle.css';
import list from './Images/Implant/1.png'
import terminal from './Images/Implant/2.png'
import lef_panel from './Images/Implant/3.png'
import file_explorer from './Images/Implant/4.png'
import operations from './Images/Implant/5.png'
import operations2 from './Images/Implant/6.png'
import operations3 from './Images/Implant/7.png'



export const ImplantGuide = () => {
    return (
        <div className='guide-container'>
            <h1>Implant Guide</h1>

            <div className="guide-text-block">
                <h3>Implant List</h3>
                <img srcSet={list} alt="implant list panel" srcset="" />
            </div>
            <div className="guide-text-block">
                <h3>Implant Terminal</h3>
                <p>The implant terminal is a highly interactive web-based terminal. You can change directories and execute commands as another user.</p>
                <img srcSet={terminal} alt="implant terminal" srcset="" />
            </div>
            <div className="guide-text-block">
                <h3>Left Panel</h3>
                <img srcSet={lef_panel} alt="left panel" srcset="" />
                <p>In the left panel, you can find the file system explorer of the victim machine. You can download victim files from there. There is also an upload functionality to transfer files to the target.</p>
            </div>
            <div className="guide-text-block">
                <h3>Victim File Explorer</h3>
                <img srcSet={file_explorer} alt="victim file explorer" srcset="" />
            </div>
            <div className="guide-text-block">
                <h3>Custom Operations</h3>
                <p>You can create your own custom commands to automate operations, divided into categories.</p>
                <img srcSet={operations} alt="custom operations" srcset="" />
                <img srcSet={operations2} alt="custom operations 2" srcset="" />
                <img srcSet={operations3} alt="custom operations 3" srcset="" />
            </div>

        </div>
    );
};
