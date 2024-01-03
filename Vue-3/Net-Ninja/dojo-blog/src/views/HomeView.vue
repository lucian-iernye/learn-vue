<template>
  <div class="home">
    <h1>Home view</h1>
    <h2>Refs</h2>
    <p>Ninja one: {{ ninjaOne.name }} - {{ ninjaOne.age }}. And ref name: {{ ninjaOneName }}</p>
    <button @click="updateNinjaOne">Update ninja one to Lucian</button>

    <h2>Reactive</h2>
    <p>Ninja two: {{ ninjaTwo.name }} - {{ ninjaTwo.age }}. And reactive name: {{ ninjaTwoName }}</p>
    <button @click="updateNinjaTwo">Update ninja two to Lucian</button>


  </div>
</template>

<script>
// @ is an alias to /src
import {reactive, ref} from "vue";

export default {
  name: 'HomeView',
  components: {

  },
  setup() {

    const ninjaOne = ref({ name: 'mario', age: 30 })
    const ninjaTwo = reactive({ name: 'luigi', age: 35 })

    let ninjaOneName = ref('mario')
    let ninjaTwoName = reactive('luigi') // invalid data type

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
      ninjaOneName.value = 'lucian'
    }

    const updateNinjaTwo = () => {
      ninjaTwo.age = 45;
      ninjaTwoName = 'lucian'
    }

    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo, ninjaOneName, ninjaTwoName }
  }
}
</script>
