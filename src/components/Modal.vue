<template>
  <teleport to="#modal-area">
    <div class="modal-overlay"></div>
    <div class="modal-container">
      <div class="modal">
        <div class="modal__header">Modal</div>
        <div class="modal__body">
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';

export default defineComponent({
  name: 'Modal',
  props: {
    isModalOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    onBeforeMount(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const bodyContainer: any = document.querySelector('body');

      if (!bodyContainer?.querySelector('#modal-area')) {
        const modalArea = document.createElement('div');

        modalArea.setAttribute('id', 'modal-area');
        modalArea.classList.add('modal-area');

        bodyContainer.appendChild(modalArea);
      }
    });
  },
});
</script>

<style lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba($color: #000000, $alpha: 0.5);
  width: 100vw;
  height: 100vh;
}
</style>
