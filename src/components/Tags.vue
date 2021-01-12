<template>
  <div class="tags">
    Tags: <span v-if="tags.length">{{ arryToText(tags, ', ') }}</span>
    <span v-else>No Search tags</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

import { getTags } from '../store/getters';
import { arryToText } from '../helpers/utils';

export default defineComponent({
  name: 'Tags',
  setup() {
    const store = useStore();

    return {
      tags: computed(() => getTags(store)),
      arryToText,
    };
  },
});
</script>

<style lang="scss" scoped>
.tags {
  font-size: 15px;
  color: var(--color-grey-50);
}
</style>
