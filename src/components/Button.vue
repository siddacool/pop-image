<template>
  <button class="button" :class="solid ? 'button--solid' : ''">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    solid: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss">
.button {
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 var(--unit-1\2);
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: var(--color-grey-50);
  border-radius: var(--border-radius-1);
  font-size: 16px;
  transition: background-color 200ms;

  &:focus {
    outline: none;
  }

  &:active {
    background-color: var(--color-bg-grey-10);
  }

  &--solid {
    background-color: var(--color-bg-grey-5);
  }

  &[disabled] {
    background-color: var(--color-bg-grey-0);
    color: var(--color-grey-20);
    cursor: default;

    svg {
      fill: var(--color-grey-20);
    }
  }

  svg {
    fill: var(--color-grey-50);
    width: 19px;
    height: 19px;
  }

  span {
    margin-left: var(--unit-1\2);
    position: relative;
    top: 2px;
  }
}
</style>
