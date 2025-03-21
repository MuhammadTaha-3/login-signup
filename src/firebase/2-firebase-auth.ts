// import {
//     createUserWithEmailAndPassword,
//     getAuth,
//     sendEmailVerification,
//     signInWithEmailAndPassword,
//     signOut,
//   } from "firebase/auth";
//   import { app } from "./1-firebase-config";
  
//   // filePath src/firebase/1-firebase-auth.ts
//   export const auth = getAuth(app);
  
//   type ServiceSignUpUserType = { email: string; password: string };
//   export function serviceSignUpUser(userSu: ServiceSignUpUserType) {
//     createUserWithEmailAndPassword(auth, userSu.email, userSu.password)
//       .then((userCredential: { user: any; }) => {
//         const user = userCredential.user;
//         console.log("userSu=>", user, userCredential);
//         if (auth.currentUser) {
//           sendEmailVerification(auth.currentUser)
//             .then(() => {
//               console.log("VEmail=> inside serviceSignUpUser");
//             })
//             .catch((error: any) => {
//               console.log(" Error VEmail=> inside serviceSignUpUser =>", error);
//             });
//         }
//       })
//       .catch((error: { message: any; code: any; }) => {
//         const errorMessage = error.message;
//         const errorCode = error.code;
//         console.log("errorCode=>", errorCode, "errorMessage=>", errorMessage);
//       });
//   }
  
//   type ServiceSignInUserType = { email: string; password: string };
//   export function serviceSignInUser(userSi: ServiceSignInUserType) {
//     signInWithEmailAndPassword(auth, userSi.email, userSi.password)
//       .then((userCredential: { user: any; }) => {
//         const userSi = userCredential.user;
//         console.log("userSi=>", userSi);
//       })
//       .catch((error: any) => {
//         console.log("errorSi=>", error);
//       });
//   }
  
//   export function serviceSignOut() {
//     signOut(auth)
//       .then(() => {
//         console.log("User LoggedOut");
//       })
//       .catch((error: any) => {
//         console.log("Error User LoggedOut=>", error);
//       });
//   }
  
//   export function serviceSendEmailVerification() {
//     if (auth.currentUser) {
//       sendEmailVerification(auth.currentUser)
//         .then(() => {
//           console.log("VEmail=> inside serviceSendEmailVerification");
//         })
//         .catch((error: any) => {
//           console.log(
//             " Error VEmail=> inside serviceSendEmailVerification =>",
//             error
//           );
//         });
//     }
//   }
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
  AuthError,
  User,
} from "firebase/auth";
import { app } from "./1-firebase-config";

// filePath src/firebase/1-firebase-auth.ts
export const auth = getAuth(app);

type ServiceSignUpUserType = { email: string; password: string };
export function serviceSignUpUser(userSu: ServiceSignUpUserType) {
  createUserWithEmailAndPassword(auth, userSu.email, userSu.password)
    .then((userCredential: UserCredential) => {
      const user: User = userCredential.user;
      console.log("userSu=>", user, userCredential);
      if (auth.currentUser) {
        sendEmailVerification(auth.currentUser)
          .then(() => {
            console.log("VEmail=> inside serviceSignUpUser");
          })
          .catch((error: AuthError) => {
            console.log(" Error VEmail=> inside serviceSignUpUser =>", error);
          });
      }
    })
    .catch((error: AuthError) => {
      const errorMessage = error.message;
      const errorCode = error.code;
      console.log("errorCode=>", errorCode, "errorMessage=>", errorMessage);
    });
}

type ServiceSignInUserType = { email: string; password: string };
export function serviceSignInUser(userSi: ServiceSignInUserType) {
  signInWithEmailAndPassword(auth, userSi.email, userSi.password)
    .then((userCredential: UserCredential) => {
      const userSi: User = userCredential.user;
      console.log("userSi=>", userSi);
    })
    .catch((error: AuthError) => {
      console.log("errorSi=>", error);
    });
}

export function serviceSignOut() {
  signOut(auth)
    .then(() => {
      console.log("User LoggedOut");
    })
    .catch((error: AuthError) => {
      console.log("Error User LoggedOut=>", error);
    });
}

export function serviceSendEmailVerification() {
  if (auth.currentUser) {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log("VEmail=> inside serviceSendEmailVerification");
      })
      .catch((error: AuthError) => {
        console.log(
          " Error VEmail=> inside serviceSendEmailVerification =>",
          error
        );
      });
  }
}