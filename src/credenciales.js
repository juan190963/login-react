// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsjQM2YUURUGOavwtiThbYfAXUbvZIlss",
  authDomain: "aplicacion-react-dda6d.firebaseapp.com",
  projectId: "aplicacion-react-dda6d",
  storageBucket: "aplicacion-react-dda6d.appspot.com",
  messagingSenderId: "475558739070",
  appId: "1:475558739070:web:dfb48e7d26b2ccc464ac2f"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);
export default appfirebase;