
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { ref, onUnmounted } from 'vue';


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
let projectCollection = projectFirestore.collection('projects');

export let create = (project) => {
  return projectCollection.add(project);
}

export let get = async (id) => {
  let project = await projectCollection.doc(id).get();
  return project.exists ? project.data() : null;
}

export let update = async (id, project) => {
  return projectCollection.doc(id).update(project)
}

export let del = (id) => {
  return projectCollection.doc(id).delete();
}

export let use = () => {
  let project = ref([]);
  let close = projectCollection.onSnapshot(snapshot => {
    project.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close);
  return project;
}
 

export { projectFirestore, projectAuth, projectCollection }