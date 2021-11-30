import { ref } from 'vue'
import { projectAuth, projectFirestore } from '../firebase/config'


const error = ref(null)
const isPending = ref(false)

const signup = async (email, password, displayName) => {
  error.value = null
  isPending.value = true

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password)
    if (!res) {
      throw new Error('Could not complete signup');
      
    }
    //add a displayName
    await res.user.updateProfile({ displayName})
    //access the users collection to make a profile for each user
    await projectFirestore.collection('users').doc(res.user.uid).set({
      displayName: res.user.displayName
      
    })
    
  
    error.value = null
    isPending.value = false
    
    return res
  }
  catch(err) {
    console.log(err.message)
    error.value = err.message
    isPending.value = false
  }
}

const useSignup = () => {
  return { error, signup,isPending }
}

export default useSignup