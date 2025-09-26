import React, { useEffect } from 'react';
import './GuidesStyle.css';
import Cookies from 'js-cookie';
import ssl from './Images/Listeners/3.png'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import one from './Images/Stagers/1.png'
import two from './Images/Stagers/2.png'
import three from './Images/Stagers/3.png'
import four from './Images/Stagers/4.png'
import five from './Images/Stagers/5.png'
import six from './Images/Stagers/6.png'
import seven from './Images/Stagers/7.png'
import eight from './Images/Stagers/8.png'
import nine from './Images/Stagers/9.png'
import ten from './Images/Stagers/10.png'
import eleven from './Images/Stagers/11.png'
import twelve from './Images/Stagers/12.png'
import thirdteen from './Images/Stagers/13.png'
import fourteen from './Images/Stagers/14.png'
import fifteen from './Images/Stagers/15.png'
import sixteen from './Images/Stagers/16.png'
import seventeen from './Images/Stagers/17.png'
import eighteen from './Images/Stagers/18.png'
import nineteen from './Images/Stagers/19.png'

export const StagerGuide = () => {




  const downloadFile = async (fileName) => {

    const url = `${import.meta.env.VITE_API_TEAM_SERVER}/api/sources/${fileName}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'x-token': `${Cookies.get('x-token')}`,
        }
      });

      if (!response.ok) {
        toast.error(response.error)
      }

      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(downloadUrl);

    } catch (err) {
      toast.error(err);
    }

  };







  return (
    <div className='guide-container'>
      <h1>Stagers Guide</h1>
      <div className="guide-text-block">
        <p>Stagers are only available for Windows systems. Stagers are raw binary implants; manual compilation and a process loader are required.</p>
        <ul>
          <li>Visual Studio</li>
          <li><Link to="https://github.com/TheWover/donut/releases/tag/v1.1" target='blank' style={{ textDecoration: 'none' }} className='guide-link' >Donut</Link></li>
          <li><Link onClick={() => downloadFile("stager_ssl.rar")} style={{ textDecoration: 'none' }} className='guide-link' >SSL Stager source</Link></li>
          <li><Link onClick={() => downloadFile("stager_no_ssl.rar")} style={{ textDecoration: 'none' }} className='guide-link' >No SSL Stager source</Link></li>
          <li><Link onClick={() => downloadFile("Loader.rar")} style={{ textDecoration: 'none' }} className='guide-link' >Loader source</Link></li>
        </ul>

        <p>Steps</p>
        <ul>
          <li>1. Compile C# stager</li>
          <li>2. Create raw binary with Donut</li>
          <li>3. Upload stager into a bucket</li>
          <li>4. Compile C++ loader with the bucket link</li>
        </ul>
      </div>
      <div className="guide-text-block">
        <h3>Download stager and open Visual Studio</h3>
        <img srcSet={one} alt="panel" srcset="" />
        <img srcSet={two} alt="open visual studio" srcset="" />
        <p>Open the stager project in Visual Studio to begin the compilation process.</p>
      </div>
      <div className="guide-text-block">
        <h3>NuGet Packages</h3>
        <p>Before compiling, you need to reinstall the Fody and Costura.Fody packages.</p>
        <img srcSet={three} alt="reinstall fody" srcset="" />
        <p>Uninstall Costura.Fody and Fody afterwards.</p>
        <img srcSet={four} alt="uninstall fody" srcset="" />
        <p>Reinstall Fody and Costura.Fody again.</p>
        <img srcSet={five} alt="reinstall fody again" srcset="" />
      </div>
      <div className="guide-text-block">
        <h3>Implant Compilation</h3>
        <p>Compilation must be in Release mode.</p>
        <img srcSet={six} alt="release mode" srcset="" />
        <p>Set implant data and compile.</p>
        <img srcSet={seven} alt="set implant data" srcset="" />
        <p>The implant will be in \bin\Release\Program.exe</p>
        <img srcSet={eight} alt="compiled implant" srcset="" />
      </div>
      <div className="guide-text-block">
        <h3>Donut Compilation</h3>
        <p>Download Donut and extract the ZIP file.</p>
        <img srcSet={nine} alt="extract donut" srcset="" />
        <p>Move the implant into the Donut folder.</p>
        <img srcSet={ten} alt="move implant" srcset="" />
        <p>Compile the raw binary.</p>
        <img srcSet={eleven} alt="compile raw binary" srcset="" />
      </div>
      <div className="guide-text-block">
        <h3>You can upload the raw binary into a public bucket</h3>
        <img srcSet={twelve} alt="upload raw binary" srcset="" />
      </div>
      <div className="guide-text-block">
        <h3>Compile C++ Loader</h3>
        <img srcSet={one} alt="compile loader step 1" srcset="" />
        <img srcSet={thirdteen} alt="compile loader step 2" srcset="" />
        <img srcSet={fourteen} alt="compile loader step 3" srcset="" />
        <img srcSet={fifteen} alt="compile loader step 4" srcset="" />
        <img srcSet={sixteen} alt="compile loader step 5" srcset="" />
        <img srcSet={seventeen} alt="compile loader step 6" srcset="" />
        <img srcSet={eighteen} alt="compile loader step 7" srcset="" />
        <img srcSet={nineteen} alt="compile loader step 8" srcset="" />

      </div>



      <ToastContainer
        style={{ backgroundColor: "transparent" }}
        position="top-center"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </div>
  );
};
