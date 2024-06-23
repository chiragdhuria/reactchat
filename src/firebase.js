import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyDSH7e8gEHsvnDaYlmxyKzcU5V_NlEFsrE",
    authDomain: "reactchat-7479d.firebaseapp.com",
    projectId: "reactchat-7479d",
    storageBucket: "reactchat-7479d.appspot.com",
    messagingSenderId: "542099725511",
    appId: "1:542099725511:web:c846f624d49e3e5e09f2e2"
  }).auth();