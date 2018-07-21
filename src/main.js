import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App.vue'
/*]
[|] Funky use for SNAP SVG
[*/
const snap = require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`);
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
  snap
})
/*]
[|] END
[*/
