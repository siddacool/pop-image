<script lang="ts">
  import { useImageStore } from '$lib/store/image.svelte';

  type Props = { imageUrl: string };

  const { imageUrl }: Props = $props();
</script>

<img
  loading="lazy"
  src={imageUrl}
  alt="daily pic picsum"
  id="daily-image"
  class={useImageStore.imageLoading ? 'loading' : ''}
/>

<style lang="scss">
  img {
    &.loading {
      opacity: 0.5;
    }
  }
</style>
