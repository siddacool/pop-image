<template>
  <div class="home">
    <ImageBox />
    <div class="control">
      <div class="main">
        <div class="container">
          <div class="settings"><Tags /></div>
          <div class="buttons"><PhotoLoaderButton /></div>
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
import Tags from '../components/Tags.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ImageBox,
    PhotoLoaderButton,
    Tags,
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
  min-height: inherit;
  background-color: var(--color-bg-white);
  display: flex;
  flex-direction: column;

  .image-box {
    flex: 1;
  }

  .control {
    height: 170px;
    padding: var(--unit-3);
    padding-bottom: 0;

    .buttons {
      display: flex;
      justify-content: center;
      padding-top: var(--unit-3);
    }
  }
}
</style>
