import { ref } from '@vue/runtime-dom'
import { projectFirestore } from '../firebase/config'

let useCollection = (collection) => {

  let error = ref(null);

  let addDoc = async (doc) => {
    error.value = null;
    try {
      await projectFirestore.collection(collection).add(doc)
    } catch (err) {
      console.log(err.message)
      error.value = err.message
    }
  }
  return { addDoc, error }
}

export default useCollection