<script lang="ts">
  import { useImageStore } from '$lib/store/image.svelte';
  import CopyDetails from './CopyDetails.svelte';
  import DynmaicImage from './DynmaicImage.svelte';
  import LoadingAnimation from './LoadingAnimation.svelte';

  let imageRef = $state<HTMLDivElement | undefined>(undefined);

  let width = $state(0);
  let height = $state(0);

  let imageUrl = $derived(
    width && height
      ? `https://picsum.photos/seed/${useImageStore.imageName}/${width}/${height}`
      : null,
  );

  $effect(() => {
    if (!imageRef) return;

    let timeout: ReturnType<typeof setTimeout>;

    const observer = new ResizeObserver(([entry]) => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        width = Math.round(entry.contentRect.width);
        height = Math.round(entry.contentRect.height);
      }, 150);
    });

    observer.observe(imageRef);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  });

  $effect(() => {
    if (!imageUrl) return;

    useImageStore.updateImageLoading(true);

    const img = new Image();

    img.onload = () => {
      useImageStore.updateImageLoading(false);
    };

    img.onerror = () => {
      useImageStore.updateImageLoading(false);
    };

    img.src = imageUrl;
  });
</script>

<div class="Image" bind:this={imageRef}>
  {#if imageUrl}
    <DynmaicImage {imageUrl} />
    <CopyDetails {imageUrl} />
  {/if}

  <LoadingAnimation />
</div>

<style lang="scss">
  .Image {
    background-color: var(--dodo-color-primary-100);
    width: 100%;
    max-width: 1000px;
    display: flex;
    height: calc(100vh - 32px);
    max-height: 667px;
    min-height: 400px;
    margin: 0 auto;
    position: relative;
  }
</style>
