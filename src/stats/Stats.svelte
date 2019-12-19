<script>
  import {onMount} from "svelte";
  import {_} from '../i18n';
  import Conditional from "../common/Conditional.svelte";
  import StatsContent from "./StatsContent.svelte";
  import {stats, getStats} from '../stores/stats';
  import {user} from '../stores/user';

  onMount(() => {
    getStats();
  });
</script>

<Conditional
  loading={$stats.loading}
  error={$stats.error}
>
  {#if $stats.result}
    <StatsContent
      result={$stats.result}
      currentUser={$user.result}
    />
  {/if}
</Conditional>
