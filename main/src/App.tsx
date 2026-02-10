import { useState } from 'react'
import useCamera from './hooks/useCamera'
import './App.css'
import { renderToString } from 'react-dom/server';

function App() {

// const camera = useCamera();
// const videoRef = camera.videoRef;
const {videoRef} = useCamera();
//renderToString({videoRef})

  return (
    <>
      <div className="video">
        <video ref={videoRef} autoPlay playsInline muted></video>
      </div>
    </>
  )
}

export default App
