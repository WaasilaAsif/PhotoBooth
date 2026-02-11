import React from 'react'
import { useRef, useEffect } from 'react'
import useCamera from '../hooks/useCamera'
import useCanvas from '../hooks/useCanvas'

type Props = {};

const Capture = (props: Props) => {
  // 1. Get the video ref from your hook (The Source)
  const { videoRef } = useCamera();
  const {canvasRef, capturePhoto} = useCanvas(videoRef);
  
  const startTimer=()=>{
    const camera = setTimeout(capturePhoto, 5000);
  }
return(
  <>
  <div className="video-container">
    <video ref = {videoRef} autoPlay playsInline muted/>
  </div>
  <button onClick={startTimer}>
    Ready?
  </button>
  <div className="canvas-container">

    <canvas id='photo' ref = {canvasRef}/>
  </div>
  </>

)
;}


export default Capture;