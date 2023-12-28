<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Letter from "@/components/Letter.vue";
</script>

<template>
  <div id="app">
    <h1>Hello, welcome to K-Team Krosswords</h1>
    <div class="wrapper">
      <div v-for="item in Array(169)" :key="item">
        <Letter />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(13, minmax(0, 1fr));
  grip-template-rows: 50px;
  gap: 10px;
}

#app {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

h1 {
  text-align: center;
  margin: 20px;
}

</style>
