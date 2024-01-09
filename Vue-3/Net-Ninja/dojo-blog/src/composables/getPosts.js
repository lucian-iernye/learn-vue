import {ref} from "vue";

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3004/posts');

            if(!data.ok) {
                // error.value = 'Some error occured.'
                throw Error('No data available')
            }

            posts.value = await data.json();

            console.log(posts.value)
        } catch (e) {
            error.value = e.message
        }
    }

    return { posts, error, load }
}

export default getPosts;