<script>
  import Card from "../ui/Card.svelte";
  import ProfileForm from "../profile/ProfileForm.svelte";
  import UserAvatar from "../common/UserAvatar.svelte";
  import {tooltip} from '../ui/Tooltip.svelte';
  import {user} from '../stores/user';
  import {_} from '../i18n';
</script>

<Card padded>
  <div class="profile-avatar">
    <div class="profile-tooltip" use:tooltip={$_('profile-gravatar-hint')}>
      <UserAvatar user={$user.result} size="large"/>
    </div>
  </div>
  <ProfileForm user={$user.result}/>
</Card>

<style>
  .profile-avatar {
    @apply flex justify-center;
  }

  .profile-tooltip {
    @apply absolute w-24;
    margin-top: -6.5rem;

    :global(img) {
      @apply border-white border-4 shadow-lg;
    }
  }
</style>
