import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import useCamera from '../hooks/useCamera'
import useCanvas from '../hooks/useCanvas'
import './styles/Capture.css'
type Props = {};

const Capture = (props: Props) => {
  const [photos, setPhotos] = useState<string[]>([]);
  // 1. Get the video ref from your hook (The Source)
  const { videoRef } = useCamera();
  const {canvasRef, capturePhoto} = useCanvas(videoRef);
  
  const startTimer=()=>{
    const camera = setTimeout(capturePhoto, 5000);
  }
return(
  <>
  <div className='booth-container'>
    <div className="stream">
        <div className="video-container">
          <video ref = {videoRef} autoPlay playsInline muted/>
        </div>
        {/* <button onClick={startTimer}>
        Ready?
        </button> */}
        <p className="lookin-good">
          Looking Good
        </p>
      </div>
      <div className="canvas-container">
        <canvas id='photo' ref = {canvasRef}/>
      </div>
  </div>
  </>

)
;}


export default Capture;