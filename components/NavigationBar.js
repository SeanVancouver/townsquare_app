'use client'

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation'
import { NavbarContext } from '@/contexts/AppContext';

const NavigationBar = () => {
  // State to track the active section, defaulting to 'what'
  const [activeSection, setActiveSection] = useState('what_Project');
  const router = useRouter();

  let { sharedState, setSharedState } = useContext(NavbarContext);  

  // switch (activeSection) {
  //   case 'what':
  //     break;

  //   case value:

  //     break;

  //   case value:

  //     break;

  //   default:
  //     break;
  // }

  return (
    <div>
      {/* Buttons to switch between sections */}
      <div style={{ display: "flex" }}>
        <button onClick={() => {
          router.push('/');
          setSharedState('what_Project')
        }}>What</button>
        <button onClick={() => {
          router.push('/why/empowerment');
          setSharedState('why')
        }}>Why</button>
        <button onClick={() => {
          router.push('/how');
          setSharedState('how_timeline')
        }}>How</button>
      </div>

      {/* Conditional rendering of sections based on the activeSection */}
      <div style={{ display: "flex", color: 'red' }}>
        {sharedState === 'what_Project' && (
          <div id="what">
            <button>Project</button>
            <button>About me</button>
          </div>
        )}
        {sharedState === 'why' && (
          <div id="why">
            <button>Empowerment</button>
            <button>Better social media</button>
            <button>Elites</button>
            <button>Capitalism</button>
            <button>Human nature</button>
          </div>
        )}
        {sharedState === 'how_timeline' && (
          <div id="how">
            <button>Timeline</button>
            <button>You can help</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
