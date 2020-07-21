<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="父级传递值">插槽内容{{urlVal}}</HelloWorld>
        <div>
            <Tips v-model:open.sync="tipsOpen" @tipsclick="tipsOpenClick"></Tips>
            <button @click="tipsOpenClick">点击打开子组件</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'Home',
    setup(props, context) {
        /**
         * 变量
        */
        const urlVal   = ref('我是组件传过来的！');
        const val      = ref('我是变量，跟着插槽过来的！');
        const tipsOpen = ref(false);
        /**
         * 方法
        */
        const tipsOpenClick = (e)=>{
            if(e === false){
                tipsOpen.value = e;//子组件返回触发方法
            }else{
                tipsOpen.value = true;//改变变量传递给子组件
            }
            
        }
        return { 
            /**
             * 变量
            */
            urlVal,
            val,
            tipsOpen,
            /**
             * 方法
            */
            tipsOpenClick
        };
    }
}
</script>