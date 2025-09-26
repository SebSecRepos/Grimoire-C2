import React from 'react';
import './GuidesStyle.css';
import help from './Images/Botnet/1.png'
import attacks from './Images/Botnet/2.png'
import attack from './Images/Botnet/3.png'
import botnet_status from './Images/Botnet/4.png'
import stopping from './Images/Botnet/5.png'


export const BotnetGuide = () => {
    return (
        <div className='guide-container'>
            <h1>Botnet Guide</h1>

            <div className="guide-text-block">
                <h3>Help</h3>
                <img srcSet={help} alt="help" srcset="" />
                <p>Displays available commands.</p>
            </div>
            <div className="guide-text-block">
                <h3>Attacks</h3>
                <p>Displays available attacks.</p>
                <img srcSet={attacks} alt="attacks" srcset="" />
                <img srcSet={attack} alt="attack" srcset="" />
                <img srcSet={botnet_status} alt="botnet status" srcset="" />
            </div>
            <div className="guide-text-block">
                <h3>Stopping Attacks</h3>
                <img srcSet={stopping} alt="stopping attacks" srcset="" />
                <p>How to stop running attacks. You can stop a specific attack or all attacks at the same time.</p>
            </div>

        </div>
    );
};
