<template>
  <div class="home">
    <div></div>
    <ImageBox />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ImageBox from '../components/ImageBox.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ImageBox,
  },
});
</script>

<style lang="scss">
@import '../styles/mixins';

.home {
  --controls-height: 80px;

  min-height: inherit;
  background-color: var(--color-white);
  display: grid;
  grid-template-rows: var(--controls-height) auto;

  @include onDesktop {
    --controls-height: 100px;
  }
}
</style>
