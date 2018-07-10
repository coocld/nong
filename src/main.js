import Vue from 'vue'
import App from './App'
import store from './store'
import fastClick from 'fastclick'
import router from './router'
import MintUI from 'mint-ui'
import '@/assets/style/reset.css'
import '@/assets/style/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
