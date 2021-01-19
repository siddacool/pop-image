<template>
  <div class="tags">
    <span v-if="tags.length"
      ><span class="search-text">Search tags: </span>
      {{ arryToText(tags, ', ') }}</span
    >
    <span v-else>No Search tags</span>
    <span v-if="isImageRefreshRequired"> (refresh required)</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

import { getTags, isImageRefreshRequired } from '../store/getters';
import { arryToText } from '../helpers/utils';

export default defineComponent({
  name: 'Tags',
  setup() {
    const store = useStore();

    return {
      tags: computed(() => getTags(store)),
      isImageRefreshRequired: computed(() => isImageRefreshRequired(store)),
      arryToText,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '../styles/mixins';

.tags {
  font-size: 15px;
  color: var(--color-grey-50);

  .search-text {
    display: none;

    @include onTablet {
      display: inline-block;
    }
  }
}
</style>
