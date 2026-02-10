import { useRef, useEffect } from 'react'
import useCamera from './hooks/useCamera'
import './App.css'

function App() {
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
  };

  return (
    <div className="app-container">
      
      {/* SECTION 1: The Live Camera Feed */}
      <div className="video-container">
        <h3>Live Feed</h3>
        {/* We attach videoRef here so the hook can stream to it */}
        <video ref={videoRef} autoPlay playsInline muted />
      </div>

      {/* SECTION 2: The Controls */}
      <button onClick={capturePhoto} style={{marginTop: '20px', fontSize: '20px'}}>
        📸 SNAP SHOT
      </button>

      {/* SECTION 3: The Output Photo */}
      <div className="canvas-container">
        <h3>Captured Photo</h3>
        {/* The canvas sits here, empty until you click the button */}
        <canvas ref={canvasRef} /> 
      </div>

    </div>
  )
}

export default App