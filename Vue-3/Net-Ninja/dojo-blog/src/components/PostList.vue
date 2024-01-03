<template>
  <h1>Post list</h1>

  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post" />
  </div>
</template>

<script>
import SinglePost from "@/components/SinglePost.vue";
import {onMounted, onUnmounted, onUpdated} from "vue";

export default {
  name: 'PostList',
  components: {SinglePost},
  props: {
    posts: {
      type: Array,
      default: []
    }
  },
  setup() {
    onMounted(() => {
      console.log('on mounted')
    });

    onUnmounted(() => {
      console.log('on unmounted')
    })

    onUpdated(() => {
      console.log('on updated')
    })
  }
}
</script>

<style scoped>

</style>