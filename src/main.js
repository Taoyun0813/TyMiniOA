import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import func from '@/utils/preload.js'
// 'development',use package;'production':use cdn;
import ElementUI from 'element-ui'
import {
    Message,
} from "element-ui"
Vue.use(ElementUI, {
  size: 'mini'
});
import '@/css/override-element-ui.css'
import('element-ui/lib/theme-chalk/index.css')

import './components/iconSvg' // iconSvg

import '@/permission' // permission control

import '@/mockjs'; // mock数据

// i18n国际化
import i18n from "@/lang";

// 分享功能集合
import {
  shareConfig
} from './utils/share';

Vue.prototype.$func = func;

Vue.config.productionTip = false;
Vue.directive('enterNumber', {
    bind: function(el, { value = 2 }) {
        el = el.nodeName == "INPUT" ? el : el.children[0]
        var RegStr = value == 0 ? `^[\\+\\-]?\\d+\\d{0,0}` : `^[\\+\\-]?\\d+\\.?\\d{0,${value}}`;
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

/*Vue.prototype.$message = {
  error(msg) {
    Message.closeAll();
    Message.error(msg)
  },
  success(msg) {
    Message.closeAll();
    Message.success(msg)
  }
}*/

Vue.prototype.shareConfig = shareConfig;


Vue.config.productionTip = false;



new Vue({
  router,
  store,
  i18n, // 便于可以直接在组件中通过this.$i18n使用，也可以按需引用
  render: h => h(App),
}).$mount('#app')
