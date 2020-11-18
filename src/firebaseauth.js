
import firebase from 'firebase/app';
import  "firebase/firestore";
import 'firebase/auth';

let config =  {
  apiKey: "AIzaSyBJk7uMiqeA2y58nPOlcknqoXsoTRvWwrY",
  authDomain: "legal-aid-1b91e.firebaseapp.com",
  databaseURL: "https://legal-aid-1b91e.firebaseio.com",
  projectId: "legal-aid-1b91e",
  storageBucket: "legal-aid-1b91e.appspot.com",
  messagingSenderId: "378154352179",
  appId: "1:378154352179:web:d4881953b13bc22832ed46",
  measurementId: "G-6527YCQVLM"
};
  // Initialize Firebase
  if (!firebase.apps.length) {
    
  firebase.initializeApp(config);
 }
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
