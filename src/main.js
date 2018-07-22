import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App.vue'
import store from './store/store.js'
/*]
[|]
[*/
Vue.use(VueMaterial)
/*]
[|]
[*/
new Vue({
    el: '#app',
    render: h => h(App),
    store
})
/*]
[|] END
[*/
