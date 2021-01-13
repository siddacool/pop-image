<template>
  <div class="image-box">
    <div class="container">
      <div
        class="image"
        ref="imageContainerRef"
        :class="!image || isImageFetching ? 'blank' : ''"
      >
        <img
          :src="image"
          alt="image"
          v-if="image"
          :style="`width: ${imageWidth}px; height: ${imageHeight}px;`"
        />
        <!-- <div
          class="img"
          :style="`background-image: url(${image})`"
          v-if="image"
        /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { getImage, isImageFetching } from '../store/getters';

export default defineComponent({
  name: 'Image',
  setup() {
    const store = useStore();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const imageContainerRef: any = ref(null);
    const imageHeight = ref(0);
    const imageWidth = ref(0);

    onMounted(() => {
      const positionInfo = imageContainerRef.value.getBoundingClientRect();

      imageHeight.value = positionInfo.height;
      imageWidth.value = positionInfo.width;
    });

    return {
      image: computed(() => getImage(store)),
      isImageFetching: computed(() => isImageFetching(store)),
      imageContainerRef,
      imageWidth,
      imageHeight,
    };
  },
});
</script>

<style lang="scss" scoped>
.image-box {
  height: 100%;
  padding: var(--unit-5) var(--unit-3);
  padding-bottom: 0;
  display: flex;

  .image {
    height: 100%;
    width: 100%;

    &.blank {
      background-color: var(--color-bg-grey-0);
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center center;
    }
  }
}
</style>
