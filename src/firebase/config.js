// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBscmsNB5TS1uVYuoSafwTKnx86trzPM6o",
  authDomain: "tanveer-49ddc.firebaseapp.com",
  projectId: "tanveer-49ddc",
  storageBucket: "tanveer-49ddc.firebasestorage.app",
  messagingSenderId: "1049585442739",
  appId: "1:1049585442739:web:21738110c4f9a5f96ab5c6",
  measurementId: "G-W25GWZE0J2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);