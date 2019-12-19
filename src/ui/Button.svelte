<button {...$$props} class="button" on:click>
  <slot/>
</button>

<style>
  .button {
    @apply bg-primary text-white font-bold py-2 px-4 rounded inline-flex items-center shadow;
    @apply transition-bg cursor-pointer;

    &:hover {
      @apply bg-purple-800;
    }

    &:active {
      @apply bg-purple-900;
      transform: scale(.98);
    }

    &:focus {
      @apply outline-none;
    }

    &:disabled {
      @apply text-muted bg-gray-400 cursor-not-allowed;
    }
  }
</style>
