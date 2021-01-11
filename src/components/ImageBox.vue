<template>
  <div class="image-box">
    <div class="container">
      <div class="image" :class="!image || isImageFetching ? 'blank' : ''">
        <div
          class="img"
          :style="`background-image: url(${image})`"
          v-if="image"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { getImage, isImageFetching } from '../store/getters';

export default defineComponent({
  name: 'Image',
  setup() {
    const store = useStore();

    return {
      image: computed(() => getImage(store)),
      isImageFetching: computed(() => isImageFetching(store)),
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../styles/mixins';

.image-box {
  height: 100%;
  padding: var(--unit-3);
  padding-bottom: 0;
  display: flex;

  @include onTablet {
    padding-top: var(--unit-5);
  }

  .image {
    height: 100%;
    width: 100%;

    &.blank {
      background-color: var(--color-bg-grey-0);
    }

    .img {
      display: block;
      width: 100%;
      height: 100%;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
}
</style>
