<template>
    <div class="tips" v-if="open">
        <div class="tipsBox">
            <div class="tipsBoxClose" @click="returnProps">X</div>
            <div>{{content}}-{{text.name}}-{{text.num}}-{{open}}</div>
            <button @click="close">直接利用.sync改变父级变量关闭</button>
        </div>
    </div>
</template>

<script>
import { ref, reactive, watch } from 'vue';
export default {
    name:'tips',
    /**
     * 父级传值
    */
    props: {
		open: Boolean
    },
    /**
     * setup
    */
    setup(props, context){
        /**
         * 变量或对象
        */
        const content = ref('我是提示框');
        const text = reactive({
            name : '名字',
            num  : 2
        })
        /**
         * .sync是回调的时候，没有逻辑处理的时候，可以用修饰器update:
        */
        const close = () =>{
            context.emit('update:open', false);
        }
        /**
         * context.emit是回调的时候，有逻辑处理的时候
         * */
        const returnProps = () =>{
            context.emit('tipsclick',false);
        }
        /**
         * 监听
        */
        watch(() => props.open,(newVal, oldVal) => {
            console.log(newVal+'|'+oldVal)
        })
        /**
         * 返回
        */
        return {
            props,
            content,
            text,
            returnProps,
            close
        }
    }
}
</script>

<style scoped>
.tips{
    background: rgba(0, 0, 0, .8);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 150px 15% 0 15%;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    font-size: 12px;
}
.tipsBox{
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    position: relative;
}
.tipsBoxClose{
    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
}
</style>