<script>
  export let ref = undefined;
</script>

<ul class="timeline" bind:this={ref}>
  <slot/>
</ul>

<style>
  .timeline {
    @apply block relative;
  }
</style>
