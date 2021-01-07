<template>
  <h1 class="text-center mt-16 text-xl">
    {{ count }}
  </h1>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Hello',
  setup() {
    const store = useStore();
    const msg = ref('Vite + Vue 3 + TypeScript + Tailwind 2 Boilerplate');

    console.log(store);

    return {
      msg,
      count: computed(() => store.state.count),
    };
  },
});
</script>

<style lang="scss"></style>
