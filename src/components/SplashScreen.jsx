// import React from "react";
// import "./SplashScreen.css"; // Create this CSS file

// function SplashScreen() {
//   return (
//     <div className="splash-screen">
//       <img
//         src="images/NoBackgroundAnanta_Pure_for_browser_Favicon.png"
//         alt="Splash Screen"
//         className="splash-image"
//       />
//     </div>
//   );
// }

// export default SplashScreen;
////////////////////////////////////////////////////////////////////////////////////

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./SplashScreen.css";

const SplashScreen = ({ duration = 6000, onAnimationComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onAnimationComplete]);

  if (!isVisible) return null;

  return (
    <div
      className="splash-screen"
      role="status"
      aria-label="Loading application"
    >
      <div className="splash-content">
        <img
          src="images/NoBackgroundAnanta_Pure_for_browser_Favicon.png"
          alt="Ananta Pure Logo"
          className="splash-image animate-pulse"
          width="500"
          height="500"
          loading="eager"
        />
        <div className="splash-loader">
          <div className="splash-loader-bar"></div>
        </div>
      </div>
    </div>
  );
};

SplashScreen.propTypes = {
  duration: PropTypes.number,
  onAnimationComplete: PropTypes.func,
};

export default SplashScreen;
