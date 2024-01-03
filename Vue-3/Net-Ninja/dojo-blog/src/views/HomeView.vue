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
import {computed, reactive, ref} from "vue";

export default {
  name: 'HomeView',
  components: {

  },
  setup() {
    const search = ref('');
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach']);

    const matchingNames = computed(() => {
      return names.value.filter(name => {
        return name.includes(search.value);
      })
    })

    return { search, names, matchingNames }
  }
}
</script>
