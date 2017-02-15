import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Feed from './pages/Feed.vue'
import Chat from './pages/Chat.vue'

const rootPath = window.location.pathname

export default new VueRouter({
  mode: 'history',
  routes: [
      { path: rootPath, component: Chat },
      { path: '/feeds', component: Feed },
      { path: '/chat', component: Chat },
  ]
})