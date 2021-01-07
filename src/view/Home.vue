<template>
  <div class="home">
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
.home {
  min-height: inherit;
  background-color: var(--color-white);
  padding: 0 var(--unit-2);
}
</style>
