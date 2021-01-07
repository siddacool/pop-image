<template>
  <Home />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from './view/Home.vue';

export default defineComponent({
  name: 'App',
  components: {
    Home,
  },
});
</script>

<style lang="scss">
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  font-family: 'Rubik', sans-serif;
  margin: 0;
  padding: 0;
}

html {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

#app {
  min-height: inherit;
}
</style>
