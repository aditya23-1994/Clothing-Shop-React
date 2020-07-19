import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyA6SwHj7F2Hn7oR8CZsYzV7J9URhxmC2SY",
    authDomain: "crown-db-46461.firebaseapp.com",
    databaseURL: "https://crown-db-46461.firebaseio.com",
    projectId: "crown-db-46461",
    storageBucket: "crown-db-46461.appspot.com",
    messagingSenderId: "1081671188538",
    appId: "1:1081671188538:web:3f25b256f02ef3858eb503"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;