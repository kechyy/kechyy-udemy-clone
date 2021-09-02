// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9IR97T7MCWPiC8skZFW-f561NsejccGM",
  authDomain: "kechyy-udemy-clone.firebaseapp.com",
  projectId: "kechyy-udemy-clone",
  storageBucket: "kechyy-udemy-clone.appspot.com",
  messagingSenderId: "627817720153",
  appId: "1:627817720153:web:87b24d1b94efb3421ac448"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export { firebaseApp };