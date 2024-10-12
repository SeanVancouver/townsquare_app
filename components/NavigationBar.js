'use client'

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';

const NavigationBar = () => {
  // State to track the active section, defaulting to 'what'
  const [activeSection, setActiveSection] = useState('what_Project');
  const router = useRouter();

  return (
    <div>
      {/* Buttons to switch between sections */}
      <div style={{ display: "flex" }}>
        <button onClick={() => {
          router.push('/');
          setActiveSection('what_Project')
        }}>What</button><p>&nbsp;|&nbsp;</p>
        <button onClick={() => {
          router.push('/why/empowerment');
          setActiveSection('why')
        }}>Why</button><p>&nbsp;|&nbsp;</p>
        <button onClick={() => {
          router.push('/how');
          setActiveSection('how_timeline')
        }}>How</button>
      </div>

      {/* Conditional rendering of sections based on the activeSection */}
      <div>
        {activeSection === 'what_Project' && (
          <div id="what" style={{ display: "flex", color: 'red' }}>
            <Link href="/">Project</Link><p>&nbsp;|&nbsp;</p>
            <Link href="/what/aboutme">About me</Link>
          </div>
        )}
        {activeSection === 'why' && (
          <div id="why" style={{ display: "flex", color: 'red' }}>
            <Link href="/why/empowerment">Empowerment</Link><p>&nbsp;|&nbsp;</p>
            <Link href="/why/bettersocialmedia">Better social media</Link><p>&nbsp;|&nbsp;</p>
            <Link href="/why/elites">Elites</Link><p>&nbsp;|&nbsp;</p>
            <Link href="/why/capitalism">Capitalism</Link><p>&nbsp;|&nbsp;</p>
            <Link href="/why/people">people</Link>
          </div>
        )}
        {activeSection === 'how_timeline' && (
          <div id="how" style={{ display: "flex", color: 'red' }}>
            <button>Timeline</button><p>&nbsp;|&nbsp;</p>
            <button>You can help</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
