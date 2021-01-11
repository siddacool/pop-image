<template>
  <div class="home">
    <ImageBox />
    <div class="control">
      <div class="container">
        <div class="control__main">
          <PhotoLoaderButton />
        </div>
      </div>
    </div>
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
  --controls-height: 100px;

  min-height: inherit;
  background-color: var(--color-bg-white);
  display: grid;
  grid-template-rows: auto var(--controls-height);

  @include onDesktop {
    --controls-height: 170px;
  }

  .control {
    .container {
      height: 100%;
    }

    &__main {
      height: 100%;
      display: flex;
      justify-content: center;
      padding: var(--unit-3);
      padding-bottom: 0;

      @include onTablet {
        padding-top: var(--unit-6);
      }
    }
  }
}
</style>
