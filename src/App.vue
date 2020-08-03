<template>
    <div id="app">
        <div>全局变量：{{num}}-{{text}}-{{duixiang.name}}</div>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/test?id=998">Test</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
    /**
     * ref：被用来给元素或子组件注册引用信息
     * getCurrentInstance：
     * vue3.0 中使用 getCurrentInstance 方法获取当前组件实例
     * 然后通过 ctx 属性获取当前上下文，ctx.$router 是路由实例或者ctx.$store获取全局变量
     * 而 ctx.$router.currentRoute 就包含当前路由信息。
    */
    import { textFun } from './util/function.js';//调用function里面的text
    import { onMounted, ref, reactive, util, computed, getCurrentInstance} from 'vue';
    import { useStore } from 'vuex'
	export default {
        name: 'APP',
        /**
         * setup
        */
        setup(props, context){
            console.log(context)
            /**
             * 变量
            */
            const weixin = ref(false);
            const duixiang = reactive({
                name : 'my name is vue'
            })
            /**
             * 方法
            */
            const myIsFunction = () =>{
                console.log('I\'m a function')
            }
            /**
             * vue2.0：mounted
             * onMounted 最后执行
            */
            onMounted(() => {
                console.log(textFun(112233));
                myIsFunction();
            })
            console.log(123123123)
            /**
             * computed用来监控自己定义的变量
            */
            const ctxStore = getCurrentInstance().ctx.$store;
            //或者使用import { useStore } from 'vuex'
            //const ctx = useStore();
            const num = computed(()=>{
                return ctxStore.state.count
            })
            const text = computed(()=>{
                return ctxStore.state.text.a
            })
            /**
             * 返回
            */
            return{
                weixin,
                num,
                text,
                duixiang,
                myIsFunction
            }
        }
	}
</script>

<style lang="scss" scoped>
@import '../src/assets/base.css';
*{
    margin: 0;
}
#app {
    font-family: Arial;
    text-align: center;
    color: #2c3e50;
}
</style>
