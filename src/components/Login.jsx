// import React from "react";

// const Login = ({ openSignUp }) => {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       <form>
//         <div className="mb-4">
//           <label className="block text-gray-700">Email</label>
//           <input
//             className="w-full px-3 py-2 border"
//             type="email"
//             placeholder="Enter Email"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Password</label>
//           <input
//             type="password"
//             className="w-full px-3 py-2 border"
//             placeholder="Enter Password"
//           />
//         </div>
//         <div className="mb-4 flex items-center justify-between">
//           <label className="inline-flex items-center">
//             <input type="checkbox" className="form-checkbox" />
//             <span className="ml-2 text-gray-700">Remember Me</span>
//           </label>
//           <a href="#" className="text-red-800">
//             Forgot Password?
//           </a>
//         </div>
//         <div className="mb-4">
//           <button type="submit" className="w-full bg-red-600 text-white py-2">
//             Login
//           </button>
//         </div>
//       </form>
//       <div className="text-center">
//         <span className="text-gray-700">Don't have an account? </span>
//         <button className="text-red-800" onClick={openSignUp}>
//           {" "}
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;

///////////////////////////////////////////////////////

// import { useState } from "react";
// import PropTypes from "prop-types";

// const Login = ({ openSignUp }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your login logic here
//     console.log({ email, password, rememberMe });
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//         Login
//       </h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Email Address
//           </label>
//           <input
//             id="email"
//             type="email"
//             placeholder="Enter your email"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="password"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Password
//           </label>
//           <input
//             id="password"
//             type="password"
//             placeholder="Enter your password"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             minLength={6}
//           />
//         </div>

//         <div className="mb-6 flex items-center justify-between">
//           <div className="flex items-center">
//             <input
//               id="remember-me"
//               type="checkbox"
//               className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
//               checked={rememberMe}
//               onChange={(e) => setRememberMe(e.target.checked)}
//             />
//             <label
//               htmlFor="remember-me"
//               className="ml-2 block text-sm text-gray-700"
//             >
//               Remember me
//             </label>
//           </div>

//           <button
//             type="button"
//             className="text-sm text-red-600 hover:text-red-800 focus:outline-none"
//             onClick={() => console.log("Forgot password clicked")}
//           >
//             Forgot password?
//           </button>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition duration-300"
//         >
//           Login
//         </button>
//       </form>

//       <div className="mt-6 text-center">
//         <span className="text-sm text-gray-600">Don't have an account? </span>
//         <button
//           onClick={openSignUp}
//           className="text-sm font-medium text-red-600 hover:text-red-800 focus:outline-none"
//         >
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// };

// Login.propTypes = {
//   openSignUp: PropTypes.func.isRequired,
// };

// export default Login;
////////////////////////////////////////////////////////////////////////

import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Login = ({ openSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Mock user data - in a real app, this would come from your backend
  const mockUsers = [
    {
      email: "user@example.com",
      password: "password123",
      name: "John Doe",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Check credentials against mock data
      const user = mockUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // Store user data (in a real app, you might use context or Redux)
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: user.email,
            name: user.name,
            rememberMe,
          })
        );

        // Redirect to dashboard or home page
        navigate("/");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Login
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>

        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-700"
            >
              Remember me
            </label>
          </div>

          <button
            type="button"
            className="text-sm text-red-600 hover:text-red-800 focus:outline-none"
            onClick={() =>
              setError("Password reset functionality would be implemented here")
            }
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className={`w-full ${
            isLoading ? "bg-red-400" : "bg-red-600 hover:bg-red-700"
          } text-white py-2 px-4 rounded-md transition duration-300 flex justify-center items-center`}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </button>
      </form>

      <div className="mt-6 text-center">
        <span className="text-sm text-gray-600">
          Don&apos;t have an account?{" "}
        </span>
        <button
          onClick={openSignUp}
          className="text-sm font-medium text-red-600 hover:text-red-800 focus:outline-none"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

Login.propTypes = {
  openSignUp: PropTypes.func.isRequired,
};

export default Login;
