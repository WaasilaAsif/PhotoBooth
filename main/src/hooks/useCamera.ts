// useCamera Hook in ts
import { useEffect, useRef } from "react";

const useCamera = () => {
  const videoRef = useRef(null);
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const videoTrack = stream.getVideoTracks()[0];
      const capabilities = videoTrack.getCapabilities();
      const maxWidth = capabilities.width?.max || 1920;
      const maxHeight = capabilities.height?.max || 1080;
      console.log(`Setting resolution to: ${maxWidth}x${maxHeight}`);
       const constraints = {
      width: { ideal: maxWidth },
      height: { ideal: maxHeight }
    };
     await videoTrack.applyConstraints(constraints);
    
    console.log("Success! The camera is now running at its hardware limit.");
    
    // Check the current settings to confirm
    console.log("Current Settings:", videoTrack.getSettings());

      if (!videoRef.current)
        console.error("Video track is not being connected to current");
      videoRef.current.srcObject = stream;
    } catch {
      console.error("Error connecting to the camera");
    }
  };
  useEffect(()=>{
    startCamera();
  },[])
  return { videoRef };
};

export default useCamera;
