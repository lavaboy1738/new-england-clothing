import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAKeW5mcOnJbGOO_Ay-MlwqF916LyN67Js",
    authDomain: "new-england-db.firebaseapp.com",
    databaseURL: "https://new-england-db.firebaseio.com",
    projectId: "new-england-db",
    storageBucket: "new-england-db.appspot.com",
    messagingSenderId: "336712621644",
    appId: "1:336712621644:web:3f88730b34902514a45ee9",
    measurementId: "G-T4FDHHM8KB"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  