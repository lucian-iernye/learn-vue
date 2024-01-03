<template>
  <div>
    <h2>Title: {{ post.title }}</h2>
    <p>Body: {{ snippet }}</p>
  </div>
</template>

<script>
import {computed} from "vue";

export default {
  name: "SinglePost",
  props: {
    post: {
      type: Object
    }
  },

  setup(props) {
    const snippet = computed(() => {
      // return props.post.body.slice(0, 75);
      // or
      return props.post.body.substr(0, 75);
    })

    return { snippet }
  }
}
</script>

<style scoped>

</style>