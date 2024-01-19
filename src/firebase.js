import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { collection, getFirestore, onSnapshot } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBMiZTSsp7JRbQIKGWXgvRwQ1PI4mhMGGQ",
    authDomain: "asmr-disney-clone.firebaseapp.com",
    projectId: "asmr-disney-clone",
    storageBucket: "asmr-disney-clone.appspot.com",
    messagingSenderId: "424427812838",
    appId: "1:424427812838:web:d2ba7430eb13b3b7790827"
  };

  
const app = initializeApp(firebaseConfig);
  

const auth = getAuth();
const db = getFirestore(app)
const provider = new GoogleAuthProvider();
const colRef = collection(db, 'movies')

const movieCollection = onSnapshot(colRef, (snapshot) => ([...snapshot.docs]))


export { auth, provider, colRef, movieCollection}
export default db;

