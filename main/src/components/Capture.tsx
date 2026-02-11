import React from 'react'
import { useRef, useEffect } from 'react'
import useCamera from '../hooks/useCamera'
import useCanvas from '../hooks/useCanvas'

type Props = {}

const Capture = (props: Props) => {
  // 1. Get the video ref from your hook (The Source)
  const { videoRef } = useCamera();
  const {canvasRef, capturePhoto} = useCanvas(videoRef);
   
return(
  <>
  
  <button onClick={capturePhoto}>
    SNAP SHOT
  </button>
  <div className="canvas-container">
    <h3>Captured Photo</h3>
    <canvas ref = {canvasRef}/>
  </div>
  </>

)
;
  }

export default Capture;