import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router.js'
import App from './App.vue'

Vue.use(VueRouter)

// 'load', 'deviceready', 'offline', and 'online'.

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() { 
    new Vue({
      el: '#app',
      router,
      render: h => h(App)
    })
}