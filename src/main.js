import fastclick from 'fastclick'
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import 'common/stylus/index.styl'

// Vue.config.productionTip = false

//解决300毫秒延迟
fastclick.attach(document.body);

//引入elementUI
Vue.use(ElementUI);

Vue.use(VueLazyload,{
    loading:require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
