import React from 'react'
import { useRef, useEffect } from 'react'
import useCamera from '../hooks/useCamera'


type Props = {}

const Capture = (props: Props) => {
  // 1. Get the video ref from your hook (The Source)
  const { videoRef } = useCamera();
  
  // 2. Create a ref for the canvas (The Destination)
  const canvasRef = useRef(null);

  // 3. The "Take Photo" Function
  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      // Set canvas size to match video stream
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw the current video frame onto the canvas
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    }
}
return(
  <>
  <div className="video-container">
    <h3>Live Feed</h3>
    <video ref = {videoRef} autoPlay playsInline muted/>
  </div>
  <button onClick={capturePhoto}>
    SNAP SHOT
  </button>
  <div className="canvas-container">
    <h3>Captured Photo</h3>
    <canvas ref = {canvasRef}/>
  </div>
  </>

)
};

export default Capture;