<script lang="ts">
  import { getProFicDetails } from '$lib/helpers/getProFicDetails';
  import { useImageStore } from '$lib/store/image.svelte';
  import { Button } from '@flightlesslabs/dodo-ui';
  import { toasts } from '@flightlesslabs/dodo-ui-bits';
  import Icon from '@iconify/svelte';

  let imageUrl = $derived(`https://picsum.photos/seed/${useImageStore.imageName}/1000/667`);

  async function copyImageUrl() {
    try {
      const details = getProFicDetails(imageUrl);
      await navigator.clipboard.writeText(details);
      console.log('Copied:', details);

      toasts.add({
        title: 'Success',
        description: 'Image details copied!',
        color: 'neutral',
      });
    } catch (err) {
      console.error('Failed to copy:', err);

      toasts.add({
        title: 'Error',
        description: 'Failed to copy the details',
        color: 'danger',
      });
    }
  }
</script>

<div class="CopyDetails">
  <Button aria-label="Copy Details" compact roundness="full" variant="text" onclick={copyImageUrl}>
    <Icon icon="material-symbols:content-copy-outline" />
  </Button>
</div>

<style lang="scss">
  .CopyDetails {
    position: absolute;
    display: inline-flex;
    right: 16px;
    top: 16px;

    :global(button) {
      font-size: 1.3rem;
    }
  }
</style>
