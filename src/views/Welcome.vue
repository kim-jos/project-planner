<template>

  <h2>Welcome</h2>
  <div v-if="showLogin">
    <Login />
    <p>Need to <span @click="showLogin = false">Signup</span>?</p>
  </div>

  <div v-else>
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
