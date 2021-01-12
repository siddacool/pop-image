<template>
  <div class="checkbox" :class="disabled ? 'disabled' : ''">
    <label>
      <input
        type="checkbox"
        :name="name"
        :value="value"
        v-on:change="(e) => $emit('change', e)"
        :disabled="disabled"
        :checked="checked"
      />
      {{ label }}
    </label>
    <InputMessage v-if="message">{{ message }}</InputMessage>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputMessage from './InputMessage.vue';

export default defineComponent({
  name: 'Checkbox',
  props: {
    name: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['change'],
  components: {
    InputMessage,
  },
});
</script>

<style lang="scss">
.checkbox {
  color: var(--color-grey-50);
  font-size: 16px;

  input {
    border: 2px solid var(--color-grey-50);
    border-radius: var(--border-radius-1);
    outline: none;
    color: inherit;
    font-size: inherit;
    cursor: pointer;
    margin-right: var(--unit-1);

    &:focus {
      outline: none;
    }

    &[disabled] {
      background-color: var(--color-grey-0);
      color: var(--color-grey-20);
      border-color: var(--color-grey-20);
      cursor: default;
    }
  }

  label {
    cursor: pointer;
    display: inline-flex;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
}
</style>
