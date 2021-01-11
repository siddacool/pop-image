<template>
  <div class="input-message">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputMessage',
});
</script>

<style lang="scss">
.input-message {
  color: var(--color-grey-50);
  font-size: 13px;
  margin-top: var(--unit-1);
}
</style>
