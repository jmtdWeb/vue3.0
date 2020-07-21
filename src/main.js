import { createApp } from 'vue';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './router/premit'//路由守卫
/* 
 * 导入全局组件
 * 针对components所有组件，只要调用名称就可以了
 */
import components from './components/component.js';

/**
 * 引入全局方法
*/
import util from './util/util.js'

createApp(App).use(router).use(store).use(components).use(util).mount('#app')
