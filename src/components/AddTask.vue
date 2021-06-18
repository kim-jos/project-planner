<template>
  <form @submit.prevent="handleSubmit">
    <label >Title: </label>
    <input v-model="title" type="text">
    <button>Add Project</button>
  </form>
    
</template>

<script>
import useCollection from '../../composables/useCollection'
import getUser from '../../composables/getUser'
import { ref } from '@vue/reactivity'

export default {
  setup() {

    let title = ref('');

    let { user } = getUser();
    let { addDoc, error } = useCollection('projects');

    let handleSubmit = async () => {
      let project = {
        title: title.value,
        user: user.value.displayName,
        tasks: [],
        complete: "false"
      }
      await addDoc(project);
    }

    return { title, error, handleSubmit }
  }
}
</script>

<style>

</style>