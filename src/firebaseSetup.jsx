// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwzxDnt4AouCTQgUE5VQ2Prxsfv-bpY1Y",
  authDomain: "sabelo-fiuba.firebaseapp.com",
  projectId: "sabelo-fiuba",
  storageBucket: "sabelo-fiuba.appspot.com",
  messagingSenderId: "960480507417",
  appId: "1:960480507417:web:c2b9726ef400b109591c88",
  measurementId: "G-Z9503XTRHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//setup https://firebase.google.com/docs/web/setup?hl=es-419
export const db = getFirestore(app);