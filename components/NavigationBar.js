'use client'

import React, { useState } from 'react';

const NavigationBar = () => {
  // State to track the active section, defaulting to 'what'
  const [activeSection, setActiveSection] = useState('what');

  return (
    <div>
      {/* Buttons to switch between sections */}
      <div style={{ display: "flex" }}>
        <button onClick={() => {
          console.log("asdfsd");
          
          setActiveSection('what')}}>What1</button>
        <button onClick={() => setActiveSection('why')}>Why</button>
        <button onClick={() => setActiveSection('how')}>How</button>
      </div>

      {/* Conditional rendering of sections based on the activeSection */}
      <div style={{ display: "flex" }}>
        {activeSection === 'what' && (
          <div id="what">
            <button>Project</button>
            <button>About me</button>
          </div>
        )}
        {activeSection === 'why' && (
          <div id="why">
            <button>Better social media</button>
            <button>Empowerment</button>
            <button>Elites</button>
            <button>Capitalism</button>
            <button>Human nature</button>
          </div>
        )}
        {activeSection === 'how' && (
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
