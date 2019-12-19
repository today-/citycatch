<script>
  export let title = null;
  export let padded = false;
  export let hoverable = false;
  export let active = false;
</script>

<div class="card" class:padded class:hoverable class:active>
  {#if title}
    <div class="card-title">
      {title}
    </div>
  {/if}
  <div class="card-content">
    <slot/>
  </div>
</div>

<style>
  .card {
    @apply bg-white relative rounded mb-3 relative shadow transition-all;

    &.padded {
      @apply mt-16;

      .card-content, .card-title {
        @apply py-12 px-6;
      }
    }

    &.hoverable {
      &:hover {
        @apply shadow-lg;
      }
    }

    &.active {
      &:after {
        @apply absolute top-0 left-0 w-full h-full shadow-outline rounded pointer-events-none;
        content: '';
      }
    }
  }

  .card-title {
    @apply p-3 border-b p-3 font-bold;
  }

  .card-content {
    @apply p-3;
  }
</style>
