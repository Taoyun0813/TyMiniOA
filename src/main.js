import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import func from '@/utils/preload.js'
// 'development',use package;'production':use cdn;
import ElementUI from 'element-ui'
import VueQuillEditor  from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'


import '@/css/override-element-ui.css'
import "@/css/style.css"
import('element-ui/lib/theme-chalk/index.css')
import '@/assets/font/iconfont.css'

import './components/iconSvg' // iconSvg

import '@/permission' // permission control

import '@/mockjs'; // mock数据
import "@/assets/font/iconfont"

// i18n国际化
import i18n from "@/lang";

// 分享功能集合
import {
  shareConfig
} from './utils/share';
Vue.use(ElementUI, {
  size: 'mini'
});
Vue.use(VueQuillEditor)

Vue.prototype.$func = func;

Vue.config.productionTip = false;
Vue.directive('enterNumber', {
    bind: function(el, { value = 2 }) {
        el = el.nodeName === "INPUT" ? el : el.children[0]
        var RegStr = value === 0 ? `^[\\+\\-]?\\d+\\d{0,0}` : `^[\\+\\-]?\\d+\\.?\\d{0,${value}}`;
        el.addEventListener('keyup', function() {
            el.value = el.value.match(new RegExp(RegStr, 'g'));
            el.dispatchEvent(new Event('input'))
        })
    }
});

Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function(el) {
        el.focus()
    }
});



Vue.prototype.shareConfig = shareConfig;


Vue.config.productionTip = false;



new Vue({
  router,
  store,
  i18n, // 便于可以直接在组件中通过this.$i18n使用，也可以按需引用
  render: h => h(App),
}).$mount('#app')
