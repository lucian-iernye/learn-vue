<template>
  <div class="letter-style">
    <p>{{ letter }}</p>
  </div>
</template>

<script>
export default {
  name: "Letter",
  props: {
    letter: {
      type: String,
      default: 'A'
    }
  }
}
</script>



<style scoped>
.letter-style {
  font-size: 16px;
  border: 1px solid red;
  padding: 8px 16px;
}
</style>