// // // filePath src/app/sign-up/page.tsx

// // "use client";

// // import ButtonComp from "@/components/button-comp";
// // import { serviceSignUpUser } from "@/firebase/2-firebase-auth";
// // import Link from "next/link";
// // import React from "react";
// // import { useState } from "react";

// // export default function LoginUserFunc() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   return (
// //     <>
// //       <h1>Sign Up Here</h1>
// //       <label htmlFor="email">Email:</label>
// //       <input
// //         type="email"
// //         id="email"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //       />
// //       <br />
// //       <br />
// //       <label htmlFor="password">Password:</label>
// //       <input
// //         type="password"
// //         id="password"
// //         value={password}
// //         onChange={(e) => setPassword(e.target.value)}
// //       />
// //       <br />
// //       <br />
// //       <ButtonComp
// //         btnLabel={"Sign up"}
// //         btnHandler={() => {
// //           serviceSignUpUser({ email, password });
// //         }}
// //       />
// //       <p>
// //         <Link href={"/"}>Sign in</Link> If you have an account.
// //       </p>
// //     </>
// //   );
// // }

// "use client";

// import ButtonComp from "@/components/button-comp";
// import { serviceSignUpUser } from "@/firebase/2-firebase-auth";
// import Link from "next/link";
// import React, { useState } from "react";

// export default function SignupUserFunc() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-900">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//         <h1 className="text-3xl font-bold text-gray-800 text-center">Sign Up</h1>
//         <p className="text-gray-500 text-center mb-6">Create a new account to get started</p>
        
//         <div className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <ButtonComp
//             btnLabel="Sign Up"
//             btnHandler={() => serviceSignUpUser({ email, password })}
//           />
//         </div>
        
//         <p className="mt-6 text-gray-600 text-center">
//           Already have an account? <Link href="/login" className="text-blue-700 font-semibold hover:underline">Log in</Link>
//         </p>
//       </div>
//     </div>
//   );
// }
"use client";

import ButtonComp from "@/components/button-comp";
import { serviceSignUpUser } from "@/firebase/2-firebase-auth";
import Link from "next/link";
import React, { useState } from "react";

export default function LoginUserFunc() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h1 className="text-center font-bold text-3xl text-gray-800 mb-6">Sign Up</h1>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Enter your password"
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2"
            />
            Remember Me
          </label>
          {/* <Link href="/forgot-password" className="text-blue-500 text-sm hover:underline">
            Forgot Password?
          </Link> */}
        </div>

        {/* Sign Up Button */}
        <ButtonComp
          btnLabel="Sign Up"
          btnHandler={() => {
            serviceSignUpUser({ email, password });
          }}
        />

        {/* Login Link */}
        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
