<template>
  <form @submit.prevent="handleSubmit">
    
    <input type="text" required placeholder="Name" v-model="displayName">
    <input type="email" required placeholder="Email" v-model="email">
    <input type="password" required placeholder="Password" v-model="password">
    <div> {{ error }} </div>
    <button>Signup</button>
  
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '../../composables/useSignup'

export default {
  setup() {
    let displayName = ref('')
    let email = ref('');
    let password = ref('');
    let { error, signup } = useSignup();

    let handleSubmit = async () => {
      await signup(displayName.value, email.value, password.value)
    }
    return { displayName, email, password, error, handleSubmit }
  }
}
</script>

<style>

</style>