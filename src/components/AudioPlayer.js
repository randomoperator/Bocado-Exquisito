import React, { useEffect, useRef } from 'react';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return (
    <audio ref={audioRef} src={src} autoPlay loop>
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;