import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB24Z2Bx0wIDRAHkzxgeMGUY6l5Hx7vIuo",
    authDomain: "house-marketplace-app-cd9ee.firebaseapp.com",
    projectId: "house-marketplace-app-cd9ee",
    storageBucket: "house-marketplace-app-cd9ee.appspot.com",
    messagingSenderId: "53025148806",
    appId: "1:53025148806:web:d2de82c859cb1848a3e607"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()