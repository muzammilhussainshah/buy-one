import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBwckGb1fw29m_n3NX8Z6J3QHcPQ2xxrYs",
    authDomain: "buy-one-73a26.firebaseapp.com",
    projectId: "buy-one-73a26",
    storageBucket: "buy-one-73a26.appspot.com",
    messagingSenderId: "865384451475",
    appId: "1:865384451475:web:b7a884ad17f4c4f041ec66",
    measurementId: "G-DPCTQYWN66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)