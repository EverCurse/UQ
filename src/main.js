import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios";
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(Vant);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
