<template>
  <div class="home">
    <h1>Home view</h1>
    <div v-if="error">{{ error }}</div>
    <div v-else>
      <PostList :posts="posts" v-if="posts.length && showPosts"/>
      <button @click="togglePosts">{{ showPosts ? 'Hide Posts' : 'Show Posts'}}</button>
      <button @click="posts.pop()">Delete a post</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {onMounted,  ref} from "vue";
import PostList from "@/components/PostList.vue";

export default {
  name: 'HomeView',
  components: {
    PostList

  },
  setup() {

    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3004/posts');

        if(!data.ok) {
          error.value = 'Some error occured.'
          throw Error('No data available')
        }

        posts.value = await data.json();

        console.log(posts.value)
      } catch (e) {
        error.value = e.message
      }
    }

    const showPosts = ref(true);

    const togglePosts = () => {
      showPosts.value = !showPosts.value;
    }

    onMounted(() => load())

    return { posts, togglePosts, showPosts, load, error }
  }
}
</script>
