<template>
  <div class="home">
    <h1>Home view</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
// @ is an alias to /src
import {computed, reactive, ref, watch, watchEffect} from "vue";
import PostList from "@/components/PostList.vue";

export default {
  name: 'HomeView',
  components: {
    PostList

  },
  setup() {

    const posts = ref([
      {
        title: 'welcome to the blog',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra aliquet eget sit amet. Faucibus turpis in eu mi bibendum neque. Adipiscing elit ut aliquam purus sit amet. Amet risus nullam eget felis eget nunc lobortis. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Maecenas pharetra convallis posuere morbi leo urna molestie at. Lorem ipsum dolor sit amet. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Neque aliquam vestibulum morbi blandit.\n' +
            '\n' +
            'Purus in mollis nunc sed id semper risus. Dui nunc mattis enim ut tellus elementum sagittis. Enim sed faucibus turpis in eu mi bibendum neque egestas. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Nec dui nunc mattis enim ut tellus elementum. Facilisi cras fermentum odio eu feugiat pretium nibh. Sit amet volutpat consequat mauris. Elit sed vulputate mi sit. Varius duis at consectetur lorem donec massa sapien. Ultrices tincidunt arcu non sodales neque. Mi eget mauris pharetra et ultrices neque ornare aenean. Amet aliquam id diam maecenas ultricies.\n' +
            '\n' +
            'Vulputate eu scelerisque felis imperdiet proin fermentum leo. Vivamus arcu felis bibendum ut tristique. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Vitae congue mauris rhoncus aenean. Tortor id aliquet lectus proin nibh nisl condimentum id. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Volutpat diam ut venenatis tellus. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Quis lectus nulla at volutpat diam. Purus gravida quis blandit turpis cursus in. At consectetur lorem donec massa sapien faucibus. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.\n' +
            '\n' +
            'Consectetur adipiscing elit ut aliquam purus sit. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Risus viverra adipiscing at in. Dignissim suspendisse in est ante in nibh. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Ipsum dolor sit amet consectetur adipiscing. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mi ipsum faucibus vitae aliquet nec. Accumsan tortor posuere ac ut consequat semper viverra. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Mattis enim ut tellus elementum sagittis vitae et leo. Libero enim sed faucibus turpis. Sit amet luctus venenatis lectus magna fringilla. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Lorem mollis aliquam ut porttitor leo a. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Magna fringilla urna porttitor rhoncus dolor purus.\n' +
            '\n' +
            'Quis hendrerit dolor magna eget est. Vitae turpis massa sed elementum tempus egestas sed sed risus. At imperdiet dui accumsan sit. Facilisis volutpat est velit egestas dui id. Tempor orci eu lobortis elementum nibh tellus molestie. In tellus integer feugiat scelerisque varius. Diam quam nulla porttitor massa id neque aliquam vestibulum. Id aliquet risus feugiat in ante metus. Sed viverra ipsum nunc aliquet. At volutpat diam ut venenatis tellus in metus vulputate. Gravida arcu ac tortor dignissim convallis.',
        id: 1
      },
      {
        title: 'top5 css tips',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur. Ultrices eros in cursus turpis. Arcu non odio euismod lacinia at quis risus. Libero volutpat sed cras ornare. Gravida quis blandit turpis cursus in hac. Arcu risus quis varius quam quisque. Blandit turpis cursus in hac habitasse. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Odio morbi quis commodo odio aenean sed adipiscing diam. Aliquet porttitor lacus luctus accumsan tortor posuere. Enim ut tellus elementum sagittis vitae et leo duis ut. Vitae nunc sed velit dignissim. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada.\n' +
            '\n' +
            'Aenean euismod elementum nisi quis. Tincidunt lobortis feugiat vivamus at augue eget arcu. Tortor vitae purus faucibus ornare suspendisse sed. Cras semper auctor neque vitae tempus quam. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Fermentum dui faucibus in ornare quam viverra. Curabitur gravida arcu ac tortor dignissim convallis. Sit amet porttitor eget dolor morbi non arcu risus quis. Eget mi proin sed libero. Urna nunc id cursus metus aliquam eleifend mi in. Sed adipiscing diam donec adipiscing. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales.\n' +
            '\n' +
            'Eget est lorem ipsum dolor sit amet consectetur. Posuere ac ut consequat semper viverra. Sagittis purus sit amet volutpat consequat mauris nunc. Leo in vitae turpis massa. Dignissim cras tincidunt lobortis feugiat vivamus at. Volutpat diam ut venenatis tellus in. Sem integer vitae justo eget magna fermentum iaculis eu. Condimentum id venenatis a condimentum vitae sapien. Neque ornare aenean euismod elementum. Velit laoreet id donec ultrices tincidunt arcu non sodales neque.\n' +
            '\n' +
            'Aliquam sem et tortor consequat id porta nibh venenatis. Eget velit aliquet sagittis id. Ut placerat orci nulla pellentesque dignissim enim sit amet. Arcu cursus vitae congue mauris rhoncus aenean vel. Neque volutpat ac tincidunt vitae semper quis lectus. Amet consectetur adipiscing elit pellentesque. Senectus et netus et malesuada fames. Consectetur adipiscing elit duis tristique sollicitudin nibh. Turpis nunc eget lorem dolor sed viverra ipsum. Maecenas sed enim ut sem viverra. Ultrices gravida dictum fusce ut placerat. Pulvinar neque laoreet suspendisse interdum consectetur. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Senectus et netus et malesuada fames ac turpis egestas sed. Gravida arcu ac tortor dignissim convallis aenean. Varius morbi enim nunc faucibus a pellentesque. Vitae tortor condimentum lacinia quis. Et malesuada fames ac turpis egestas sed tempus urna.\n' +
            '\n' +
            'Auctor eu augue ut lectus arcu bibendum at varius. Scelerisque purus semper eget duis. Lorem dolor sed viverra ipsum nunc aliquet. Tincidunt augue interdum velit euismod in pellentesque. Augue ut lectus arcu bibendum at varius vel. Velit euismod in pellentesque massa placerat duis ultricies lacus. Gravida rutrum quisque non tellus. Auctor eu augue ut lectus arcu bibendum. Orci a scelerisque purus semper. Massa tincidunt dui ut ornare lectus sit amet est placerat. Tempor orci eu lobortis elementum nibh tellus molestie. Mattis enim ut tellus elementum sagittis vitae et leo. Egestas maecenas pharetra convallis posuere morbi.',
        id: 2
      },
    ]);

    return { posts }
  }
}
</script>
