// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEFXQbX6vqjY79vfzQnzj8LvIFWVilTuw",
  authDomain: "lilianagames-fc3ad.firebaseapp.com",
  projectId: "lilianagames-fc3ad",
  storageBucket: "lilianagames-fc3ad.appspot.com",
  messagingSenderId: "927312435774",
  appId: "1:927312435774:web:0a9a7af43b0d1562c0cf6f",
  measurementId: "G-DXSZ278YGQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); 


export const loginWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // Este bloque se ejecuta cuando la autenticación es exitosa
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user)
      return user
      // Puedes hacer lo que necesites con la información del usuario
    })
    .catch((error) => {
      // Este bloque se ejecuta si hay un error durante la autenticación
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData?.email; // Asegúrate de verificar si customData está presente
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};
