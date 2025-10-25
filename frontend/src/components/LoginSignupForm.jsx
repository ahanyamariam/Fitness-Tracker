import { useState } from "react";

export default function LoginSignupForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col w-3/4 gap-4 text-center">
      <h2 className="text-2xl font-bold mb-2">{isLogin ? "Login" : "Sign Up"}</h2>

      <input
        type="email"
        placeholder="Email"
        className="px-3 py-2 rounded-md bg-gray-100 text-black outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        className="px-3 py-2 rounded-md bg-gray-100 text-black outline-none"
      />

      {!isLogin && (
        <input
          type="password"
          placeholder="Confirm Password"
          className="px-3 py-2 rounded-md bg-gray-100 text-black outline-none"
        />
      )}

      <button className="py-2 bg-gray-300 text-black rounded-md font-semibold hover:bg-gray-400 transition">
        {isLogin ? "Login" : "Sign Up"}
      </button>

      <p className="text-sm text-gray-400">OR</p>

      <button
        onClick={() => setIsLogin(!isLogin)}
        className="text-sm text-gray-400 hover:text-gray-200 transition"
      >
        {isLogin ? "Create an Account" : "Already have an account?"}
      </button>
    </div>
  );
}
