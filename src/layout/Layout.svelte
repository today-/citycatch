<script>
  import {onMount} from 'svelte';
  import {getNotificationsContext} from 'svelte-notifications';
  import {setNotificationsContext} from '../stores/notifications';
  import NavBar from './NavBar.svelte';

  onMount(() => {
    setNotificationsContext(getNotificationsContext());
  })
</script>

<div class="layout">
  <NavBar/>

  <div class="container">
    <slot/>
  </div>
</div>

<style>
  .layout {
    @apply h-screen flex flex-col;
  }

  .container {
    @apply flex-1 pb-4;
    padding-top: 66px;
  }
</style>
