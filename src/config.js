import { initializeApp, getApps } from "firebase/app"
// import { getDatabase } from "firebase/database"
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: import.meta.env.VITE_NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messageingSenderId: import.meta.env.VITE_NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
}


// initializing Firebase setup 
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
// export const db = getDatabase(firebase_app)

export default firebase_app;