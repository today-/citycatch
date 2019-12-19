<script>
  export let color = undefined;
</script>

<span
  class="tag"
  class:green={color === 'green'}
  class:red={color === 'red'}
  class:primary={color === 'primary'}
>
  <slot/>
</span>

<style>
  .tag {
    @apply rounded-full shadow px-2 py-1 text-xs font-semibold whitespace-no-wrap;

    :global(i) {
      @apply inline align-text-bottom;
    }

    &.green {
      @apply text-green-900 bg-green-200;
    }

    &.red {
      @apply text-red-700 bg-red-200;
    }

    &.primary {
      @apply text-purple-600 bg-purple-100;
    }
  }
</style>
