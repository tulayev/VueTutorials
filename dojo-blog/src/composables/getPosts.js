import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPosts = () => {

    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            // simulate delay
            // await new Promise(resolve => {
            //     setTimeout(resolve, 2000)
            // })
            
            const res = await projectFirestore.collection('posts')
                        .orderBy('createdAt', 'desc')
                        .get()
            
            posts.value = res.docs.map(doc => {
               return { ...doc.data(), id: doc.id }
            })
        } catch(err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { posts, error, load }

}

export default getPosts