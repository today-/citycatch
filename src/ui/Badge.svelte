<script>
  export let blinking = false;
</script>

<span class="badge" class:blinking>
  <slot/>
</span>

<style>
  .badge {
    @apply absolute right-0 top-0 -mt-2 -mr-1 z-10;
    @apply rounded-full bg-purple-100 p-1 text-xs shadow text-center;
  }
</style>
