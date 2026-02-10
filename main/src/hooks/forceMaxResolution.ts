async function forceMaxResolution() {
  try {
    // 1. Get initial access to the camera
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const videoTrack = stream.getVideoTracks()[0];

    // 2. Check what the hardware is actually capable of
    const capabilities = videoTrack.getCapabilities();
    console.log("Hardware Capabilities:", capabilities);

    // 3. Extract the maximum width and height supported by your camera
    const maxWidth = capabilities.width?.max || 1920; // Fallback to 1920 if max is not defined
    const maxHeight = capabilities.height?.max || 1080; // Fallback to 1080 if max is not defined

    console.log(`Setting resolution to: ${maxWidth}x${maxHeight}`);

    // 4. Force the track to use these maximum values
    const constraints = {
      width: { ideal: maxWidth },
      height: { ideal: maxHeight }
    };

    await videoTrack.applyConstraints(constraints);
    
    console.log("Success! The camera is now running at its hardware limit.");
    
    // Check the current settings to confirm
    console.log("Current Settings:", videoTrack.getSettings());

  } catch (error) {
    console.error("Constraint failed or permission denied:", error);
  }
}

forceMaxResolution();