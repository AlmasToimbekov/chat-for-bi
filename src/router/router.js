import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MessageWatch from '../views/MessageWatch'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/msg',
    name: 'msg-watch',
    component: MessageWatch,
    params: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
