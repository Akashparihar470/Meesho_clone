import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyD6XuB3MzikDNmtC7VoWbzFVadj8moWCLk",
    authDomain: "meesho-phone-login.firebaseapp.com",
    projectId: "meesho-phone-login",
    storageBucket: "meesho-phone-login.appspot.com",
    messagingSenderId: "513788545726",
    appId: "1:513788545726:web:6eb45bc09259f2b6e36cef"
  };

  const app = initializeApp(firebaseConfig);

  export const authentication= getAuth(app);