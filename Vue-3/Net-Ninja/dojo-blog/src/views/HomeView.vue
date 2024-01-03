<template>
  <div class="home">
    <h1>Home view</h1>

<!--    <pre>Name: {{ name }}</pre>-->
<!--    <pre>Age: {{ age }}</pre>-->

    <p ref="para">My name is {{ name }} and my age is {{ age }}</p>

    <button @click="handleClick">Click me</button>

    <input type="text" name="" id="" v-model="name">
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";

export default {
  name: 'HomeView',
  components: {

  },
  setup() {
    // this make the values reactive
    let name = ref('mario');
    let age = ref(30);

    const handleClick = () => {
      name.value = 'Lucian'
      age.value = 35;
      // this changed the values
    }

    const para = ref(null);

    return { name, age, handleClick, para }
  }
}
</script>
