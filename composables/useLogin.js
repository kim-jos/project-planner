import { ref } from "vue"
import { projectAuth } from '../firebase/config'

let error = ref(null)
let login = async (email, password) => {

  try {
    //login user using firebase method
    let res = await projectAuth.signInWithEmailAndPassword(email, password)
    
    // throw error in case res does not go through
    if (!res) throw new Error("Could not login")
    
    // update error value to null
    error.value = null;

    // return res object so that we can use it for future use
    return res;
  
  } catch (err) {
    error.value = err.message;
    console.log(err.value);
  }
}

// created separate useLogin because we do not create a new instance of login or error each time this composable is used
let useLogin = () => {
  return { error, login }
}

export default useLogin