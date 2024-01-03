<template>
  <div class="home">
    <h1>Home view</h1>
    <input type="text" name="" id="" v-model="search">
    <p>searching for ... {{ search }}</p>
    <button @click="stopWatchers">Stop watching</button>

    <div v-for="(name, index) in matchingNames" :key="index">
      <p>{{name}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {computed, reactive, ref, watch, watchEffect} from "vue";

export default {
  name: 'HomeView',
  components: {

  },
  setup() {
    const search = ref('');
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach']);

    const stopWatch = watch(search, () => {
      console.log('watching...')
    })

    // runs once on setup loads and run every time when a value which gets modified it's used inside
    const stopEffect = watchEffect(() => {
      console.log('watch effect', search.value)
    })

    const matchingNames = computed(() => {
      return names.value.filter(name => {
        return name.includes(search.value);
      })
    })

    const stopWatchers = () => {
      stopWatch()
      stopEffect()
    }

    return { search, names, matchingNames, stopWatchers }
  }
}
</script>
