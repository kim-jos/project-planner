
import { ref } from '@vue/runtime-dom';
import { projectAuth } from '../firebase/config'

let user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged(_user => {
  user.value = _user;
})

let getUser = () => {
  return { user }
}

export default getUser