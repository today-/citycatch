<span class="dasher">
  <span class="dasher-content">
    <slot/>
  </span>
</span>

<style>
  .dasher {
    @apply relative px-2 py-1 text-xs font-semibold whitespace-no-wrap z-1;
    min-height: 1.5rem;

    &:before {
      @apply absolute border-t-2 border-dashed border-gray-300 z-0 w-full left-0;
      top: 0.8rem;
      z-index: -1;
      height: 2px;
      content: "";
    }
  }

  .dasher-content {
    @apply z-1 mx-2 px-1 bg-white inline;
  }
</style>
