<template>

  
  <div class="project" :class="{complete: project.complete}">
    <div class="actions">
      <h3 @click="showDetails = !showDetails"> {{project.title}} </h3>
      <div class="icons">
        
        <span @click="deleteProject(project.id)" class="material-icons">delete</span>
        <router-link :to="{ name: 'EditProject', params: { id : project.id }}">
          <span class="material-icons">edit</span>
        </router-link>
        <span @click="completeProject(project.id, project.complete)" class="material-icons tick">done</span>
      
      </div>
    </div>
    <div v-if="showDetails" class="details"><p> {{ project.details }} </p></div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { del } from '../../firebase/config'
import { update } from '../../firebase/config'


export default {
  props: ['project'],
  setup() {
    let showDetails = ref(false);
    let deleteProject = (id) => del(id)
    let completeProject = (id, project) => update(id, { complete: !project });

    return { showDetails, deleteProject, completeProject }
  }
}
</script>

<style>
.project {
    margin: 20px auto;
    background: white; 
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 4px solid #e90074;
}
h3 {
    cursor: pointer;
}
.actions {
    display: flex;
    justify-content: space-between;
    align-items: center;   
}
.material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
}
.material-icons:hover {
    color: #777;
}
.project.complete {
    border-left: 4px solid #00ce89;
}
.project.complete .tick {
    color:#00ce89;
}
</style>