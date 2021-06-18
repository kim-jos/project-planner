import { ref } from 'vue';
import { projectAuth } from '../firebase/config'



let error = ref(null);

let logout = () => {
  try {
    projectAuth.signOut();
    error.value = null;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
}

let useLogout = () => {
  return { logout, error }
}

export default useLogout;