<template>
  <div class="home">
    <h1>Home view</h1>

<!--    <pre>Name: {{ name }}</pre>-->
<!--    <pre>Age: {{ age }}</pre>-->

    <p ref="para">My name is {{ name }} and my age is {{ age }}</p>

    <button @click="handleClick">Click me</button>
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

    let name = 'mario';
    let age = 30;

    const handleClick = () => {
      console.log(para.value)

      para.value = 'new value' // not gonna change. this is only useful to add/change classes

      console.log(para.value)
    }

    const para = ref(null);

    return { name, age, handleClick, para }
  }
}
</script>
