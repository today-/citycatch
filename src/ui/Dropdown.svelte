<script>
  import {scale} from 'svelte/transition';

  export let isOpen = false;
  export let isMenu = false;
</script>

{#if isOpen}
  <div
    class="dropdown"
    class:is-menu={isMenu}
    transition:scale={{start: .9, duration: 175}}
    on:click
  >
    <slot/>
  </div>
{/if}

<style>
  .dropdown {
    @apply mt-2 absolute text-left bg-white rounded-lg shadow-lg py-1;
    @apply w-full z-20;

    &.is-menu {
      @apply w-64 z-50 right-0;
      transform-origin: top right;
    }

    > :global(a) {
      @apply flex items-center px-6 py-3 leading-tight;

      &:hover {
        @apply bg-gray-200;
      }

      &.highlighted {
        @apply bg-gray-200;
      }

      :global(i) {
        @apply mr-2;
      }
    }
  }
</style>
