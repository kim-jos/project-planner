<template>
    <form @submit.prevent="handleSubmit">
      <input type="email" required placeholder="Email" v-model="email">
      <input type="password" required placeholder="Password" v-model="password">
      <div> {{ error }} </div>
      <button>Login</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../../composables/useLogin'
import { useRouter } from 'vue-router';

export default {
  setup() {
    let email = ref('');
    let password = ref('');
    let { error, login } = useLogin();
    let router = useRouter();

    let handleSubmit = async () => {
      await login (email.value, password.value)
      if (!error.value) {
        console.log('user logged in')
        router.push('/dashboard')
      }
    }

    return { email, password, error, handleSubmit }
  }
}
</script>

<style>

</style>