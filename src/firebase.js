// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiLwsbvJ4h_TZiTFIa_OMWE2Osihl1lB4",
    authDomain: "yelp-camp-e262c.firebaseapp.com",
    projectId: "yelp-camp-e262c",
    storageBucket: "yelp-camp-e262c.appspot.com",
    messagingSenderId: "76798397450",
    appId: "1:76798397450:web:41741549fd71c86db2a3f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);