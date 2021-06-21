<template>

  <div v-if="user" class="navbar">
    <div>
      <h3 class="name">Welcome {{ user.displayName }}!</h3>
      <p class="email"><i> {{ user.email }} </i></p>
    </div>
    
    <div>
      <router-link :to="{ name: 'Welcome'}">
        <button @click="logout">Sign Out</button>
      </router-link>
    </div>
  </div>
  
</template>

<script>
import getUser from '../../composables/getUser'
import useLogout from '../../composables/useLogout'

export default {
  setup() {
    let { logout } = useLogout();
    let { user } = getUser();
    return { user, logout }
  }
}
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;   
}
.name {
  margin: 5px 0 1px 0;
}
.email {
  margin-top: 1px;
}
</style>