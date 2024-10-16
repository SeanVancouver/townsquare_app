'use client'

import { useEffect, useState } from 'react';
import JoinModal from './JoinModal';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Find the target div where you want to inject the script
    const embedDiv = document.getElementById('ck_embed');

    if (embedDiv) {
      // Create a script element
      const script = document.createElement('script');

      // Set the script attributes
      script.src = 'https://townsquare.ck.page/2c21689ef3/index.js';
      script.async = true;
      script.setAttribute('data-uid', '2c21689ef3');

      // Append the script to the div
      embedDiv.appendChild(script);
    }

    // Clean up the script if the component unmounts
    return () => {
      if (embedDiv) {
        embedDiv.innerHTML = ''; // Remove the script and any content it generated
      }
    };
  }, []);

  return (
    <>
      <div className='flex w-full'>
        <div className='flex-1'>
          <p>Contact email: <span>someone@townsquare.com</span></p>
          <p>Youtube channel: <span>whatever URL</span></p>
          <iframe width="420" height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
        </div>
        <div id="ck_embed" className='flex-1'></div>
      </div>


      {/* <div className='flex'>
        <img src="/assets/uncle-sam-29972_640.png" />
        <div>
          <p>Do you have what it takes? We need good and driven people to help make TownSquare happen.</p>
          <button onClick={() => {
            setIsOpen(true);
          }}>JOIN US</button>
        </div>
      </div> */}
      {/* <JoinModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </>
  );
}

export default Footer