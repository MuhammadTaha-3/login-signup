// // filepath src/app/email-verification/page.tsx
// "use client";

// import ButtonComp from "@/components/button-comp";
// import {
//   serviceSendEmailVerification,
//   serviceSignOut,
// } from "@/firebase/2-firebase-auth";
// import React from "react";

// export default function EmailVarificationFunc() {
//   return (
//     <>
//       <h1>Verify Email</h1>{" "}
//       <ButtonComp
//         btnLabel={"Sign Out"}
//         btnHandler={() => {
//           serviceSignOut();
//         }}
//       />
//       <br />
//       <br />
//       <ButtonComp
//         btnLabel={"Send Email"}
//         btnHandler={() => {
//           serviceSendEmailVerification();
//         }}
//       />
//     </>
//   );
// }
"use client";

import ButtonComp from "@/components/button-comp";
import {
  serviceSendEmailVerification,
  serviceSignOut,
} from "@/firebase/2-firebase-auth";
import React from "react";

export default function EmailVerificationFunc() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 text-center">
        <h1 className="font-bold text-3xl text-gray-800 mb-4">Verify Your Email</h1>
        <p className="text-gray-600 mb-6">
          We have sent a verification email. Please check your inbox and verify your email.
        </p>

        {/* Send Email Verification Button */}
        <ButtonComp
          btnLabel="Resend Email"
          btnHandler={() => {
            serviceSendEmailVerification();
          }}
        />

        <div className="mt-4">
          {/* Sign Out Button */}
          <ButtonComp
            btnLabel="Sign Out"
            btnHandler={() => {
              serviceSignOut();
            }}
          />
        </div>
      </div>
    </div>
  );
}
