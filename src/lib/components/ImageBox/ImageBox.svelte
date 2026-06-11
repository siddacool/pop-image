<script>
  import { Button } from '@flightlesslabs/dodo-ui';
  import Image from './Image.svelte';
  import { useImageStore } from '$lib/store/image.svelte';
  import { getFormattedToday } from '$lib/helpers/getToday';
  import Icon from '@iconify/svelte';
</script>

<div class="ImageBox">
  <p>{getFormattedToday()}</p>
  <Image />
  <Button onclick={useImageStore.updateImageName} variant="text" background="subtle" size="large">
    <Icon icon="material-symbols:refresh-rounded" />
    Refresh
  </Button>
</div>

<style lang="scss">
  .ImageBox {
    display: flex;
    flex-direction: column;
    align-items: center;

    :global(button) {
      margin-top: 32px;
      font-size: 1.1rem;
    }

    :global(button svg) {
      margin-right: 8px;
      font-size: 1.3rem;
    }

    p {
      width: 100%;
      text-align: center;
      margin-top: 0;
    }
  }
</style>
