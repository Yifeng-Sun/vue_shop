import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
// import './assets/font-awesome-4.7.0/css/font-awesome.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// import createPersistedState from 'vuex-persistedstate'
// export default new Vuex.Store({
//     state:{},
//     getters:{},
//     actions:{},
//     mutations:{},
//     modules:{},
//     plugins: [createPersistedState(
//       this.tableDataBegin
//     )]  //加上这个就可以了 //里面设置需要缓存的内容
// })
