import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import './firebase'
import VueFire from 'vuefire'
import moment from 'moment'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(VueResource);
Vue.prototype.moment = moment;
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
});
Vue.use(VueFire);

Vue.http.options.root = 'https://vue-tutorial-ajax.firebaseio.com/'
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


    // "bootstrap": "4.0.0",
    // "jquery": "1.9.1 - 3",
    // "popper.js": "^1.12.9",
    // were in package.json file?
