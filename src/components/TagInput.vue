<template>
  <div class="tag-input" :class="disabled ? 'disabled' : ''">
    <label v-if="label">{{ label }}</label>
    <input
      type="text"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      v-on:input="(e) => $emit('input', e)"
      :disabled="disabled"
    />
    <InputMessage v-if="message">{{ message }}</InputMessage>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputMessage from './InputMessage.vue';

export default defineComponent({
  name: 'TagInput',
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
    placeholder: {
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
  },
  emits: ['input'],
  components: {
    InputMessage,
  },
});
</script>

<style lang="scss">
.tag-input {
  color: var(--color-grey-50);
  font-size: 16px;
  display: flex;
  flex-direction: column;

  input {
    border: 2px solid var(--color-grey-50);
    border-radius: var(--border-radius-1);
    outline: none;
    color: inherit;
    font-size: inherit;
    padding: var(--unit-1);

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
    margin-bottom: var(--unit-1);
    font-size: 15px;
  }
}
</style>
