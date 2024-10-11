'use client'
import { useState, useRef, useEffect } from 'react';

const AudioPlayer = () => {
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
    <div>
      <button onClick={togglePlayPause} style={{ fontSize: '24px', cursor: 'pointer' }}>
        {isPlaying ? '⏸️' : '▶️'}
      </button>
      <audio ref={audioRef} src="/audio/sample.mp3" />
    </div>
  );
};

export default AudioPlayer;
