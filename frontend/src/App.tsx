import * as React from "react";
import { useEffect, useState } from "react";
import SplashScreen from "./pages/SplashScreen";
import AuthPage from "./pages/AuthPage";
import logo from "./assets/logo2.png";
import './lib/firebase';

/* Optional: define props if SplashScreen or AuthPage use them
interface SplashScreenProps {
  onFinish: () => void;
  isTransitioning: boolean;
}

interface AuthPageProps {
  isVisible: boolean;
}
*/
export default function App(): React.JSX.Element {
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [showAuthPage, setShowAuthPage] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      // Show auth page slightly before transition completes
      setTimeout(() => setShowAuthPage(true), 400);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen bg-[#340062] text-white relative overflow-hidden">
      {/* Animated Logo - stays on top during entire transition */}
      <img
        src={logo}
        alt="App Logo"
        style={{
          position: "fixed",
          width: "14rem",
          height: "14rem",
          zIndex: 9999,
          top: isTransitioning ? "30%" : "50%",
          left: isTransitioning ? "calc(50% + 17.5vw)" : "50%",
          transform: isTransitioning
            ? "translate(-50%, -50%) scale(0.6)"
            : "translate(-50%, -50%) scale(1)",
          transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: "none",
        }}
      />

      {/* Splash Screen */}
      {!showAuthPage && (
        <SplashScreen
          onFinish={() => {}}
          isTransitioning={isTransitioning}
        />
      )}

      {/* Auth Page */}
      {showAuthPage && <AuthPage isVisible={isTransitioning} />}
    </div>
  );
}
