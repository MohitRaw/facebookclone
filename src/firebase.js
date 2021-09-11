import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyB7QKiRQUxhShNadRX5IQyopQuQW8YIZzg",
  authDomain: "facebook-clone-75948.firebaseapp.com",
  projectId: "facebook-clone-75948",
  storageBucket: "facebook-clone-75948.appspot.com",
  messagingSenderId: "165196237745",
  appId: "1:165196237745:web:2ce9d4137c9d4d6de08b90",
  measurementId: "G-6JJJEZ0TL0"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export  { auth, provider };
export default db;