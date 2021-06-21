<template>

  <div v-if="showLogin">
    <h2>Sign In</h2>
    <Login />
    <p>Need to <span @click="showLogin = false">Signup</span>?</p>
  </div>

  <div v-else>
    <h2>Sign Up</h2>
    <Signup />
    <p>Already have an account? <span @click="showLogin = true">Login</span></p>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'

export default {
  name: 'Welcome',
  components: { Login, Signup },
  setup() {
    let showLogin = ref(true);

    return { showLogin }
  }
}
</script>
