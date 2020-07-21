/**
 * 路由守卫
*/
import router from './index'

/**
 * 白名单
 * indexOf方法，判断数组中是否存在
*/
const whiteRouter = ['/home','/test'];

router.beforeEach((to, from, next) => {
    //console.log(to)
    //console.log(from)
    let token = '1';
    let routerName = to.fullPath;
    if(token || whiteRouter.indexOf(routerName) !== -1){
        /**
         * 正常
         * 路由在跳转之前做处理
        */
        next()
    }else{
        /**
         * 去登录
        */
        next('/home')
    }

})