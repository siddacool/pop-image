<template>
  <div class="home">
    <nav>
      <SettingsButton />
    </nav>
    <ImageBox />
    <div class="control">
      <div class="main">
        <div class="container">
          <Tags />
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
import SettingsButton from '../components/SettingsButton.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ImageBox,
    PhotoLoaderButton,
    Tags,
    SettingsButton,
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

  nav {
    position: absolute;
    top: var(--unit-1);
    right: var(--unit-2);

    @include onDesktop {
      right: var(--unit-3);
    }
  }
}
</style>
