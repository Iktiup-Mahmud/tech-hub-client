// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtIklnfRUTOPmFMObUFA5gINN6yoPbMsM",
    authDomain: "tech-hub-21a4e.firebaseapp.com",
    projectId: "tech-hub-21a4e",
    storageBucket: "tech-hub-21a4e.appspot.com",
    messagingSenderId: "1054565832568",
    appId: "1:1054565832568:web:13de7f6f24012edf299a8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;