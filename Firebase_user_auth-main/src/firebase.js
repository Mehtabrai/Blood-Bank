import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCnsqk0TrBs6ZytiQkaN6YE8AfCPnEQSWE",
  authDomain: "blood-bank-7787f.firebaseapp.com",
  projectId: "blood-bank-7787f",
  storageBucket: "blood-bank-7787f.appspot.com",
  messagingSenderId: "827928571843",
  appId: "1:827928571843:web:224322e08d611b8a1c5776",
  measurementId: "G-8KZ08H0Q3K"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}
