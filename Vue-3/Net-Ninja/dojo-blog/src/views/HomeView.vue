<template>
  <div class="home">
    <h1>Home view</h1>
    <input type="text" name="" id="" v-model="search">
    <p>searching for ... {{ search }}</p>

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

    watch(search, () => {
      console.log('watching...')
    })

    // runs once on setup loads and run every time when a value which gets modified it's used inside
    watchEffect(() => {
      console.log('watch effect', search.value)
    })

    const matchingNames = computed(() => {
      return names.value.filter(name => {
        return name.includes(search.value);
      })
    })

    return { search, names, matchingNames }
  }
}
</script>
