<template>
  <teleport to="#modal-area">
    <div class="modal-overlay"></div>
    <div class="modal-container">
      <div class="modal">
        <div class="modal__header">
          {{ title }}
          <Button class="close-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"
              />
            </svg>
          </Button>
        </div>
        <div class="modal__body">
          <slot />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';
import Button from './Button.vue';

export default defineComponent({
  name: 'Modal',
  props: {
    title: {
      type: String,
      default: 'Modal',
    },
    isModalOpen: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Button,
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
@import '../styles/mixins';

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba($color: #000000, $alpha: 0.85);
  width: 100vw;
  height: 100vh;
}

.modal-container {
  position: fixed;
  width: 100vw;
  max-width: 85vw;
  top: 200px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2000;

  @include onDesktopLarge {
    width: 800px;
  }
}

.modal {
  background-color: var(--color-white);
  border-radius: var(--border-radius-1);
  color: var(--color-grey-50);
  font-size: 16px;

  &__header {
    padding: var(--unit-2) var(--unit-3);
    padding-right: var(--unit-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;

    @include onTablet {
      font-size: 18px;
    }
  }

  &__body {
    padding: var(--unit-2) var(--unit-3);
    min-height: 200px;
  }
}
</style>
