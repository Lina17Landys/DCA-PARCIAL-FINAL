const firebaseConfig = {
  apiKey: "AIzaSyBDIGSGcXR5B3gOZ2SwIC_Kr7ekGXP2qW0",
  authDomain: "examen-3-be570.firebaseapp.com",
  projectId: "examen-3-be570",
  storageBucket: "examen-3-be570.appspot.com",
  messagingSenderId: "661496505513",
  appId: "1:661496505513:web:cd41efefa99baf9bebf5b8",
  measurementId: "G-F83FVVCKEK"
};

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

import { collection, addDoc } from "firebase/firestore"; 

try {
  const docRef = await addDoc(collection(db, "letter"), {
    letter: "",
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

import { getDocs } from "firebase/firestore"; 

const querySnapshot = await getDocs(collection(db, "letter"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});