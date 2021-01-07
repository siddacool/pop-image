<template>
  <div class="container image-box"></div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Image',
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

<style lang="scss" scoped>
.image-box {
  --gap-top: var(--unit-5);
  --gap-bottom: 100px;

  background-color: var(--color-grey-0);
  position: relative;
  top: var(--gap-top);
  height: calc(100vh - (var(--gap-top) + var(--gap-bottom)));
}
</style>
