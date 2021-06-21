<template>
  <div class="home">
    <FilterNav @filterChange="changeFilterState" :currFilterState="currFilterState" />
    <div v-for="project in projects" :key="project.id">
      <div v-if="currFilterState === 'completed'">
        <SingleProject v-if="project.complete" :project="project" />
      </div>
      <div v-else-if="currFilterState === 'ongoing'">
        <SingleProject v-if="!project.complete" :project="project" />
      </div>
      <div v-else>
        <SingleProject :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { use } from '../../firebase/config'
import SingleProject from '../components/SingleProject.vue'
import FilterNav from '../components/FilterNav.vue'

export default {
  components: { SingleProject, FilterNav },
  setup() {
    let addProject = false;
    let handleAddProject = !addProject
    let projects = use();
    let currFilterState = ref('all');
    
    let changeFilterState = (event) => currFilterState.value = event;
      
    return { 
      addProject, 
      handleAddProject, 
      projects, 
      currFilterState, 
      changeFilterState,
    }
  }
}
</script>

<style>
template {
  display: flex;
  flex-direction: row;
}
.sidebar {
  background-color: teal;
}
</style>