import firebase from "firebase"
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

export const app = firebase.initializeApp({
  apiKey: "AIzaSyDVFXOlCgpDa0z3fZ2tOlykuYk60HXa9S8",
  authDomain: "smartpadi.firebaseapp.com",
  projectId: "smartpadi",
  storageBucket: "smartpadi.appspot.com",
  messagingSenderId: "696450552696",
  appId: "1:696450552696:web:9c0a462ae2b187d288ae8d"
});