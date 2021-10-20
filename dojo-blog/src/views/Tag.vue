<template>

    <div class="tag">
        <div v-if="error">
            {{ error }}
         </div>

        <div v-if="posts.length" class="layout">
            <PostList :posts="postsWithTags" />
            <TagCloud :posts="posts" />
        </div>
        <div v-else>
            <Spinner />
        </div>
    </div>

</template>

<script>
import { useRoute } from 'vue-router'
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import Spinner from '../components/Spinner.vue'
import { computed } from '@vue/reactivity'

export default {

    components: { Spinner, PostList, TagCloud },

    setup() {
        const { posts, error, load } = getPosts()
        const route = useRoute()

        load()

        // composition api way of filtering post by their tags
        const postsWithTags = computed(() => {
            return posts.value.filter(post => post.tags.includes(route.params.tag))
        })

        return { posts, error, route, postsWithTags }
    },

    // options api way of filtering post by their tags
    // computed: { 
    //     postsWithTags() {
    //         return this.posts.filter(post => post.tags.includes(this.route.params.tag))
    //     }
    // }

}
</script>

<style>

.tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}

</style>