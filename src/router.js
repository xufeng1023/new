import VueRouter from 'vue-router'
import Home from './Components/Home.vue'
import Test from './Components/Test.vue'

const rootPath = window.location.pathname

export default new VueRouter({
  mode: 'history',
  routes: [
      { path: rootPath, component: Home },
      { path: '/tt', component: Test },
  ]
})