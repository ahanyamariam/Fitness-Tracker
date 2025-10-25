import LoginSignupForm from "../components/LoginSignupForm";
import Scene3D from "../components/Scene3D";

export default function AuthPage({ isVisible }) {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-neutral-900"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.6s ease-in-out 0.4s",
      }}
    >
      <div className="flex w-11/12 max-w-5xl h-[70vh] rounded-3xl overflow-hidden shadow-xl">
        <div className="flex-1 flex items-center justify-center bg-neutral-950 text-white">
          <LoginSignupForm />
        </div>

        <div
          className="flex-1 flex items-center justify-center relative"
          style={{ backgroundColor: "#340062" }}
        >
          {/* 3D Scene with Dumbbell */}
          <Scene3D />
          
          {/* Placeholder for logo - actual logo is animated separately and will appear on top */}
          <div className="w-32 h-32 relative z-10"></div>
        </div>
      </div>
    </div>
  );
}
