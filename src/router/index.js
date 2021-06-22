import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Signup from '../components/Signup.vue'
import Login from '../components/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import AddProject from '../views/AddProject.vue'
import EditProject from '../views/EditProject.vue'

import { projectAuth } from '../../firebase/config'

// route guard doesn't work initially because it takes firebase
// a splite second to recognize that there is a currentUser

// go to main.js to find the solution to this problem
let requireAuth = async (to, from, next) => {
  let user = await projectAuth.currentUser
  if (!user) next({ name: "Welcome" })
  else next()
}

// If user is signed in, direct them to dashboard
let requireNoAuth = async (to, from, next) => {
  let user = await projectAuth.currentUser
  if (user) next({ name: "Dashboard" })
  else next()
}
const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: requireAuth
  },
  {
    path: '/add',
    name: 'AddProject',
    component: AddProject
  },
  {
    path: '/project/:id',
    name: 'EditProject',
    component: EditProject,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
