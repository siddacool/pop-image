<template>
  <div class="grid-row">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GridRow',
});
</script>

<style lang="scss">
@import '../styles/mixins';

.grid-row {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: var(--unit-2);

  @include onTablet {
    flex-direction: row;
  }
}
</style>
