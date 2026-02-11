import React from 'react'
//import { useRef, useEffect } from 'react'
import useCamera from '../hooks/useCamera'


type Props = {}

const Stream = (props: Props) => {
  const { videoRef } = useCamera();
  //const {canvasRef, capturePhoto} = useCanvas(videoRef);
   
return(
  <>
  <div className="video-container">
    <h3>Live Feed</h3>
    <video ref = {videoRef} autoPlay playsInline muted/>
  </div>
  </>

)
;
  }

export default Stream;