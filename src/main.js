// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import Swatches from 'vue-swatches'
import "vue-swatches/dist/vue-swatches.min.css"
import Snotify from 'vue-snotify';
import 'vue-snotify/styles/material.css'; // or dark.css or simple.css
import { store } from './store/store'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(Snotify);
Vue.component('icon', Icon);
Vue.component('swatches',Swatches);
// import Add from './components/Add';
// Vue.component('add', Add )
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
