'use client'

import { useEffect } from 'react';
import Link from 'next/link';

const Footer = () => {

  useEffect(() => {
    const embedDiv = document.getElementById('ck_embed');

    if (embedDiv) {
      const script = document.createElement('script');

      script.src = 'https://townsquare.ck.page/2c21689ef3/index.js';
      script.async = true;
      script.setAttribute('data-uid', '2c21689ef3');

      embedDiv.appendChild(script);

      // const interval = setInterval(() => {
      //   const unwantedElement = document.querySelector('.formkit-powered-by-convertkit-container');
      //   if (unwantedElement) {
      //     unwantedElement.remove();
      //     clearInterval(interval); 
      //   }
      // }, 100);

      script.onload = () => {
        const unwantedElement = document.querySelector('.formkit-powered-by-convertkit-container');
        const convertkitForm = document.querySelector('#ck_embed form');

        if (unwantedElement) {
          unwantedElement.remove();
          convertkitForm.style.width = '100%';
        }
      }
    }

    return () => {
      if (embedDiv) {
        embedDiv.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      <div className='bg-[lightblue] pb-10 mt-12 px-[30px]'>
        <div id="ck_embed" className='flex justify-center '></div>
        <div className='flex max-w-[700px] w-full flex sm:justify-evenly md:flex-row m-auto flex-col items-center mt-4'>
          <div className='flex items-center'><img width={'30'} src="assets/email-1-svgrepo-com.svg" /><a className='ml-[0.2rem]' href="mailto:myemailaddress@gmail.com">someone@townsquare.com</a></div>
          <div className='flex items-center mb-6 mt-5 md:mt-0 md:mb-0'><img width={'30'} src="assets/youtube-color-svgrepo-com.svg" /> <a className='ml-[0.4rem]'>name of channel</a></div>

          <Link href="/join"><button className='w-[200px] h-10 bg-[crimson] text-[white] text-base rounded-[5px] ' style={{border: 'none'}}>Join us</button></Link>

        </div>
      </div>
    </>
  );
}

export default Footer