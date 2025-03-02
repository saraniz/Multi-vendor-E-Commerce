import React from 'react'
import Lottie from "react-lottie";
import animationData from '../../Assests/loadingAnimation.json'
const loadingAnimation = () => {
    const defaultOptions = {
        loop: true, // Set to `false` if you don't want the animation to loop
        autoplay: true, // Set to `false` if you want to control animation playback
        animationData: animationData, // Pass the animation data from the JSON file
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice", // Keeps the aspect ratio intact
        },
      };
    
      return (
        <div>
          <h1>Lottie Animation Example</h1>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      );
    
}

export default loadingAnimation;
