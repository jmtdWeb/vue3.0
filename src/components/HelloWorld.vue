<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>For a guide and recipes on how to configure</p>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String
    }
};
</script>

<style scoped lang="scss">
h3 {margin: 40px 0 0;}
</style>
