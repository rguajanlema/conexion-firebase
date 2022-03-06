import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWErPrZLsGn49isoEGn9g1U-AGYoJ2ZZ4",
  authDomain: "conexion-firebase-d9d2b.firebaseapp.com",
  projectId: "conexion-firebase-d9d2b",
  storageBucket: "conexion-firebase-d9d2b.appspot.com",
  messagingSenderId: "22500290878",
  appId: "1:22500290878:web:590d459108fb263a54fc6f"
};


const firebaseapp = initializeApp(firebaseConfig);
export default firebaseapp;