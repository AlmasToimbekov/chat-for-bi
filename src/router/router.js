import Vue from 'vue'
import VueRouter from 'vue-router'
import MessageWatch from '../views/MessageWatch'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'msg-watch',
    component: MessageWatch,
    params: false
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
