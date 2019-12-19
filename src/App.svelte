<script>
  import {onMount} from 'svelte';
  import Notifications from 'svelte-notifications';
  import ErrorPage from './common/ErrorPage.svelte';
  import Routes from './routing/Routes.svelte';
  import {probeUser, user} from './stores/user';
  import {error} from './stores/error';
  import './i18n';

  onMount(() => {
    probeUser();
  });
</script>

{#if $error}
  <ErrorPage title={$error}/>
{:else if $user.result}
  <Notifications>
    <Routes/>
  </Notifications>
{/if}

