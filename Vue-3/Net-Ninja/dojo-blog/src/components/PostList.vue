<template>
  <h1>Post list</h1>

  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post" />
  </div>
</template>

<script>
import SinglePost from "@/components/SinglePost.vue";

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

  }
}
</script>

<style scoped>

</style>