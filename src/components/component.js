/**
 * 必须放在装组件的文件夹根目录下components
 * 在main.js里引入
 * import components from './components/component.js';
 * 针对components所有组件，只要调用名称就可以了
 */
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
const requireComponent = require.context('./', true, /\.vue$/)
const install = (Vue) => {
    /**
     * 如果组件被注册就返回,没有就注册
    */
    if (install.installed) return
    install.installed = true
    requireComponent.keys().forEach(filename => {
        /**
         * filename 文件，第i个组件
        */
        const config = requireComponent(filename)
        /**
         * 组件名
        */
        const componentName = capitalizeFirstLetter(
            filename.match(/([^/]+)$/)[1].replace(/\.\w+$/, '')
        )
        /**
         * 循环注册组件
        */
        Vue.component(componentName, config.default || config)
    })
}
export default {
    install
}