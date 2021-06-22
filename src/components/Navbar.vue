<template>

  <div v-if="user" class="navbar">
    <div>
      <router-link class="name" :to="{ name: 'Dashboard'}">
        <h3 class="name">Welcome <span id="displayName">{{ user.displayName }}!</span></h3>
      </router-link>
      <p class="email"><i>{{ user.email }}</i></p>
    </div>
    
    <div class="btn">
      <router-link :to="{ name: 'Welcome'}">
        <button class="signOutBtn" @click="logout">Sign Out</button>
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
  text-decoration: none;
  color: inherit;
}
#displayName {
  color: #00ce89;
}
.email {
  margin-top: 1px;
}
.signOutBtn {
  background: #00ce89;
  color: white;
  padding: 5px;
  border: 0;
  border-radius: 6px;
  font-size: 13px;
  justify-content: center;
}
.signOutBtn:hover {
  background: #02be80;
  cursor: pointer;
}
</style>