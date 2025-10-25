import React, { useEffect } from "react";
import logo from "../assets/logo.png";

const SplashScreen = ({ onFinish, isTransitioning }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2000); // Splash lasts 2 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#340062",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9998,
        opacity: isTransitioning ? 0 : 1,
        transition: "opacity 0.8s ease-in-out 0.5s", // Delay fade to let logo move first
        pointerEvents: isTransitioning ? "none" : "auto",
      }}
    >
      {/* Loading dots */}
      <div
        style={{
          marginTop: "12rem",
          display: "flex",
          gap: "0.5rem",
          opacity: isTransitioning ? 0 : 1,
          transition: "opacity 0.3s ease-out",
        }}
      >
        <span style={dotStyle}></span>
        <span style={{ ...dotStyle, animationDelay: "0.2s" }}></span>
        <span style={{ ...dotStyle, animationDelay: "0.4s" }}></span>
      </div>
    </div>
  );
};

// Styles for the loading dots
const dotStyle = {
  width: "0.8rem",
  height: "0.8rem",
  borderRadius: "50%",
  backgroundColor: "#fff",
  display: "inline-block",
  animation: "bounce 1s infinite",
};

// Add keyframes for the bounce animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `
@keyframes bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}
`,
  styleSheet.cssRules.length
);

export default SplashScreen;
