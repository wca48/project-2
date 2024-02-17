import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDIsQjCAyR5ZwLjb-uGjaolpY-rojB0Vcs",
    authDomain: "portfolio-website-f2ba7.firebaseapp.com",
    projectId: "portfolio-website-f2ba7",
    storageBucket: "portfolio-website-f2ba7.appspot.com",
    messagingSenderId: "186122604018",
    appId: "1:186122604018:web:a1f92d2a4dd9510c8a2f6b"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();