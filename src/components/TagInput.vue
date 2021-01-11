<template>
  <div class="tag-input">
    <label v-if="label">{{ label }}</label>
    <input type="text" :name="name" :placeholder="placeholder" />
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
  },
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
  }

  label {
    margin-bottom: var(--unit-1);
    font-size: 15px;
  }
}
</style>
