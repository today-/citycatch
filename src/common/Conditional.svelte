<script>
  import Spinner from '../ui/Spinner.svelte';

  export let loading = false;
  export let error = null;
</script>

{#if loading}
  <Spinner large/>
{:else if error}
  <div>{error}</div>
{:else}
  <slot/>
{/if}

