import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDRyZG83FaX-yAw__N_iI-JdVECCy4Tj-M",
    authDomain: "pokemonexcercice.firebaseapp.com",
    projectId: "pokemonexcercice",
    storageBucket: "pokemonexcercice.appspot.com",
    messagingSenderId: "998718259742",
    appId: "1:998718259742:web:2b98504655a78e6638e40f",
    measurementId: "G-32JY7CL8HJ"
  };  

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()

export {auth, provider, storage}

export default db;