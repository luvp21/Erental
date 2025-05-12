// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_yblQ29eb2cWB0Nw73Aunn9rF5-xf01Y",
  authDomain: "erental-b358e.firebaseapp.com",
  projectId: "erental-b358e",
  storageBucket: "erental-b358e.firebasestorage.app",
  messagingSenderId: "563548061700",
  appId: "1:563548061700:web:749bb36d4d1999384cf551",
  measurementId: "G-2XQ3F7W8Z0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)

export { auth }

