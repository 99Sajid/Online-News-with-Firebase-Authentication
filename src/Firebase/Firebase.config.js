// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA19Q0Vxi4fJBhlgseMgReB30dvutYNjeE",
  authDomain: "dragon-news-braking-authen.firebaseapp.com",
  projectId: "dragon-news-braking-authen",
  storageBucket: "dragon-news-braking-authen.firebasestorage.app",
  messagingSenderId: "12785373072",
  appId: "1:12785373072:web:76d1fe8d528a37301dad15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;