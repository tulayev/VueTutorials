<template>
  
    <div v-for="post in posts" :key="post">
        <PostSingle :post="post" />
    </div>

</template>

<script>
import PostSingle from '../components/PostSingle.vue'

export default {
    props: ['posts'],
    components: { PostSingle },
}
</script>

<style>

</style>