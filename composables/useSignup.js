import { ref } from "vue"
import { projectAuth } from '../firebase/config'

let error = ref(null)
let signup = async (displayName, email, password) => {

  try {
    //sign up user using firebase method
    let res = await projectAuth.createUserWithEmailAndPassword(email, password)
    
    // throw error in case res does not go through
    if (!res) throw new Error("Could not signup user")
    
    // update name of user (this is required because the createUserWithEmailAndPassword method by firebase doesn't take in a displayName)
    await res.user.updateProfile({ displayName })
    
    // update error value to null
    error.value = null;
    console.log(res.user)
    // return res object so that we can use it for future use
    return res;
  
  } catch (err) {
    error.value = err.message;
  }
}

let useSignup = () => {
  return { error, signup }
}

export default useSignup