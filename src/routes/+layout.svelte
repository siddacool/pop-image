<script lang="ts">
  import '@flightlesslabs/dodo-ui/styles/global.css';
  import '$lib/styles/dodo-ui-customized.scss';
  import '@flightlesslabs/dodo-ui/styles/components.css';

  let { children } = $props();
</script>

<main>
  {@render children()}
</main>

<style lang="scss">
  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    display: flex;
    height: 100vh;
    width: 100vw;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    font-family: Rubik, sans-serif;
  }

  main {
    padding: 16px;
    overflow: auto;
    width: 100%;

    @media (width >= 64rem) {
      padding: 32px;
      padding-top: 60px;
    }
  }
</style>
