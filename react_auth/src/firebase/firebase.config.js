// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7gi5VTGj3O4QA-7i-anH35GC9BOXN7PI",
  authDomain: "react-auth-d3502.firebaseapp.com",
  projectId: "react-auth-d3502",
  storageBucket: "react-auth-d3502.appspot.com",
  messagingSenderId: "516772254012",
  appId: "1:516772254012:web:bd01e0694d46e4cd698e39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;