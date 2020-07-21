import Vuex from 'vuex'

/**
 * action和mutation都可以改变state中数据的状态
 * 但是action可以处理异步函数可以在devtool中追踪数据变化
 * 而mutation只可以处理同步函数，当处理异步函数的时候检测不到数据变化；
*/
export default Vuex.createStore({
    state: {
        count : 0,
        text:{
            a : '我是文字'
        }
    },
    /**
     * 只可以处理同步函数，当处理异步函数的时候检测不到数据变化
    */
    mutations: {
        increment (state,data) {
			console.log(state.count+'后面的dara参数可以是对象，我在src下面store.js里面，vuex'+data.text)
			state.count++
		},
		addNum(state,amount) {
			console.log(amount)
			state.count -= amount
		}
    },
    /**
	 * Action 类似于 mutation，不同在于：
	 * Action 提交的是 mutation，而不是直接变更状态。
	 * Action 可以包含任意异步操作。
     * Action 可处理异步回调
	*/
    actions: {
        increment (context,args) {
			context.commit('addNum',args)
		}
    },
    /**
     * 分模块重新注入
     * 大型项目建议使用,容易区分命名空间
     * 使用：toor.$store.dispatch.login.aaa
     * const login = {//login.js
     *  state:{
     *      aaaa : 1000
     *  }
     * }
     * export default login;
     * 本页面
     * import vue form './vue'
     * import login form './login.js'
     * export default new Vuex.Store({
     *  modules:{
     *      login
     *  }
     * })
    */
    modules: {
    }
});
