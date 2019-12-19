<script>
  import UserAvatar from "./UserAvatar.svelte";
  import {tooltip} from '../ui/Tooltip.svelte';

  export let user;
  /** @type {'large'|'small'|'default'} */
  export let size = undefined;

  export let current = false;
  export let muted = false;
</script>

<div class="participant-avatar" class:current class:muted use:tooltip={user.name}>
  <UserAvatar
    user={user}
    size={size}
  />
</div>

<style>
  .participant-avatar {
    @apply inline-block align-middle;

    :global(img) {
      @apply shadow border-2 border-white w-9 h-9;
      transition: box-shadow 0.3s ease-in-out;
    }

    &.current {
      :global(img) {
        @apply shadow-xl; /* shadow-outline */
      }
    }

    &.muted {
      :global(img) {
        @apply opacity-40;
      }
    }

    & + & {
      @apply ml-1;
    }
  }
</style>
