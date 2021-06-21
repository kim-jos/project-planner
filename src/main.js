import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { projectAuth } from '../firebase/config'



// dont mount the app every time the auth state changes
let app = null;
// mount the app when there is a auth state change
projectAuth.onAuthStateChanged(() => {
  if (!app) app = createApp(App).use(router).mount('#app')
})
