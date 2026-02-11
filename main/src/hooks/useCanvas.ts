import { useEffect, useRef } from "react";
//import useCamera from "./useCamera";
const useCanvas = (videoRef) => {
    
    const canvasRef = useRef(null);
    // 3. The "Take Photo" Function
  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (video && canvas) {
      // Set canvas size to match video stream
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw the current video frame onto the canvas
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    }
};
return {canvasRef, capturePhoto};
} ;
export default useCanvas;  