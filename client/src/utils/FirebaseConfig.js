import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBKi2AnN9YAqJZbWnt1446kXEz4i1PGKZ4",
    authDomain: "whatsapp-4e2af.firebaseapp.com",
    projectId: "whatsapp-4e2af",
    storageBucket: "whatsapp-4e2af.appspot.com",
    messagingSenderId: "281518822682",
    appId: "1:281518822682:web:289c6fae789a3bed6448a3",
    measurementId: "G-BVZZNSFFNE"
  };

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);