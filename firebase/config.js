
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDWnTA157wWT9vUVkLuzSWXn2hOVB_l5XE",
  authDomain: "project-planner-223b4.firebaseapp.com",
  projectId: "project-planner-223b4",
  storageBucket: "project-planner-223b4.appspot.com",
  messagingSenderId: "123411839417",
  appId: "1:123411839417:web:8b5e82bce9689569161e68"
};

firebase.initializeApp(firebaseConfig)

let projectFirestore = firebase.firestore();
let projectAuth = firebase.auth()

export { projectFirestore, projectAuth }