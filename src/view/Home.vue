<template>
  <div class="home">
    <div class="control">
      <div class="container">
        <div class="control__main">
          <PhotoLoaderButton />
        </div>
      </div>
    </div>
    <ImageBox />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';

import ImageBox from '../components/ImageBox.vue';
import PhotoLoaderButton from '../components/PhotoLoaderButton.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ImageBox,
    PhotoLoaderButton,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch('fetchImage');
    });
  },
});
</script>

<style lang="scss">
@import '../styles/mixins';

.home {
  --controls-height: 80px;

  min-height: inherit;
  background-color: var(--color-bg-white);
  display: grid;
  grid-template-rows: var(--controls-height) auto;

  @include onDesktop {
    --controls-height: 100px;
  }

  .control {
    .container {
      height: 100%;
    }

    &__main {
      height: 100%;
      display: flex;
      align-items: flex-end;
      padding: 0 var(--unit-3);
      padding-bottom: var(--unit-3);

      @include onDesktop {
        justify-content: center;
      }
    }
  }
}
</style>
