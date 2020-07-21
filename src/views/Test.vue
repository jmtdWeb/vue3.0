<template>
    <div class="test">
        <h1>test page</h1>
        <h2>{{count}}</h2>
        <h3>{{mun}}</h3>
        <h4>count * 2 = {{doubleCount}}</h4>
        <button @click="add">add</button>
        <button @click="storeMutationsCosunt">改变mutations全局变量</button>
        <button @click="storeActionsCosunt">改变actions全局变量</button>
    </div>
</template>

<script>
/**
 * ref：被用来给元素或子组件注册引用信息
 * computed：计算属性
 * watch：监听
 * getCurrentInstance：
 * vue3.0 中使用 getCurrentInstance 方法获取当前组件实例
 * 然后通过 ctx 属性获取当前上下文，ctx.$router 是路由实例或者ctx.$store获取全局变量
 * 而 ctx.$router.currentRoute 就包含当前路由信息。
*/
import { ref, computed, watch, getCurrentInstance } from 'vue';
    export default {
        data() {
			return {
				text : '我是一段字符串'
			}
		},
        setup(props, context){
            /**
             * 变量
            */
            const count = ref(0)
            const mun = 2
            /**
             * 获取路由或全局变量
            */
            const  ctx  = getCurrentInstance().ctx
            /**
             * 方法
            */
            const add = ()=>{
                count.value++
            }
            const storeMutationsCosunt = ()=>{
                ctx.$store.commit('increment',{'text':'我是全局变量'});
                ctx.$store.state.text.a = 'mutations全局变量';
            }
            const storeActionsCosunt = ()=>{
                ctx.$store.dispatch('increment',1);
                ctx.$store.state.text.a = 'actions全局变量';
            }
            /**
             * 监听
            */
            watch(() => count.value, val => {
                console.log(`count is ${val}`)
                console.log('count is '+val)
                console.log(ctx.$router.currentRoute.value)//获取路由
            })
            /**
             * 计算属性
            */
            const doubleCount = computed(() => count.value * 2)
            /**
             * 返回
            */
            return {
                count,
                mun,
                doubleCount,
                add,
                storeMutationsCosunt,
                storeActionsCosunt
            }
        },
        mounted() {
            console.log(this.text)
        }
    }
</script>

<style lang="less" scoped>
.test {
  color: red;
}
</style>