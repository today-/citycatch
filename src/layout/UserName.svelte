<script>
  import UserAvatar from "../common/UserAvatar.svelte";
  import {user} from '../stores/user';
</script>

<div class="user-name">
  <UserAvatar
    user={$user.result}
  />
  <div class="user-name-ellipsis">
    {$user.result.name}
  </div>
</div>

<style>
  .user-name {
    @apply flex items-center h-8;
    max-width: calc(100vw - 160px);

    :global(img) {
      @apply shadow;
    }
  }

  .user-name-ellipsis {
    @apply truncate ml-2;
  }
</style>
