// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqAKNFid6w7sv7tPd343pYEbxN5fiGPIY",
  authDomain: "alfa-auto-park.firebaseapp.com",
  projectId: "alfa-auto-park",
  storageBucket: "alfa-auto-park.appspot.com",
  messagingSenderId: "415305459584",
  appId: "1:415305459584:web:1469e6e71a63f2ecc8c365"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;