<template>
  <div class="image-box">
    <div class="container">
      <div class="image"></div>
    </div>
  </div>
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
@import '../styles/mixins';

.image-box {
  height: 100%;
  padding: 0 var(--unit-3);
  padding-bottom: var(--unit-6);
  display: flex;

  @include onDesktop {
    padding-bottom: 100px;
  }

  .image {
    background-color: var(--color-grey-0);
    height: 100%;
    width: 100%;
  }
}
</style>
