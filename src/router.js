import VueRouter from 'vue-router'
import Home from './Components/Home.vue'
import Feed from './Components/Feed.vue'
import Chat from './Components/Chat.vue'

const rootPath = window.location.pathname

export default new VueRouter({
  mode: 'history',
  routes: [
      { path: rootPath, component: Chat },
      { path: '/feeds', component: Feed },
      { path: '/chat', component: Chat },
  ]
})