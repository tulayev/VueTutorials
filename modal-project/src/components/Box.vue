<template>
    <div class="lol">

    </div>

    <p :class="{123: theme === 'lol'}">{{ header }}</p>

    <button @click="close">Button from asdasd</button>
</template>

<script>
    
    export default {
        props: ['header', 'theme'],
        methods: {
            close() {
                this.$emit('close')
            }
        }
    }

</script>


<style>

    .lol {
        margin: 10px auto;
        width: 100px;
        height: 100px;
        background: red;
    }

</style>