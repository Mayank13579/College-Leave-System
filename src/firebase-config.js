import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAYxF1pa2J5Qu1iDyyiuGk25xaA0F8U3-I",
  authDomain: "test-e8f8b.firebaseapp.com",
  projectId: "test-e8f8b",
  storageBucket: "test-e8f8b.appspot.com",
  messagingSenderId: "788199825618",
  appId: "1:788199825618:web:51676ee4a4fc4f79c60d0b",
  measurementId: "G-WP50PE26E5"
};
  const fire=()=>{
    
  }
  export default fire;
  const app=initializeApp(firebaseConfig);
  export const db = getFirestore()
  export const auth=getAuth(app);
  export const storage=getStorage(app);