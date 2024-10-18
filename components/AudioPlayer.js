'use client'
import { useState, useRef, useEffect } from 'react';

const AudioPlayer = ({ source }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Toggle play/pause
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // When the audio ends, reset the play button
  useEffect(() => {
    const audioElement = audioRef.current;

    // Listen for the 'ended' event
    const handleAudioEnd = () => {
      setIsPlaying(false);
    };

    audioElement.addEventListener('ended', handleAudioEnd);

    // Clean up the event listener when the component unmounts
    return () => {
      audioElement.removeEventListener('ended', handleAudioEnd);
    };
  }, []);

  return (
    <>
      <p onClick={togglePlayPause} className='underline' style={{ fontSize: '1.2rem', cursor: 'pointer', textUnderlineOffset: '0.5rem', marginTop: 0 }}>Audio version: {isPlaying ? '⏸️' : '▶️'}</p>
      {/* <button onClick={togglePlayPause} style={{ fontSize: '24px', cursor: 'pointer' }}>

        
      </button> */}
      <audio ref={audioRef} src={source} />
    </>
  );
};

export default AudioPlayer;
