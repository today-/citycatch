<script>
  import {_} from '../i18n';
  import UserAvatar from "../common/UserAvatar.svelte";
  import StatItem from "./StatItem.svelte";
  import Icon from "../icon/Icon.svelte";
  import {formatNumber} from "../utils/format";
  import Apartment from "../icon/apartment.svg";
  import User from "../icon/user.svg";
  import Bank from "../icon/bank.svg";
  import Star from "../icon/star.svg";

  export let currentUser = undefined;
  /** @type ITopCategory */
  export let total;
</script>

<div class="stats-row">
  <div class="stats-col">
    {#if currentUser}
      <UserAvatar user={currentUser} size="large"/>
    {:else}
      <StatItem title={$_('stats-users')} value={formatNumber(total.users)}>
        <Icon icon={User}/>
      </StatItem>
    {/if}
  </div>
  <div class="stats-col">
    <StatItem
      title={currentUser ? $_('stats-my-games') : $_('stats-games')}
      value={formatNumber(total.games)}
    >
      <Icon icon={Apartment}/>
    </StatItem>
  </div>
  <div class="stats-col">
    <StatItem
      title={currentUser ? $_('stats-games-my-wins') : $_('stats-games-wins')}
      value={total.wins}
      suffix={`(${total.winsPercent}%)`}
    >
      <Icon icon={Star}/>
    </StatItem>
  </div>
  <div class="stats-col">
    <StatItem
      title={currentUser ? $_('stats-games-my-cities') : $_('stats-games-cities')}
      value={formatNumber(total.items)}
    >
      <Icon icon={Bank}/>
    </StatItem>
  </div>
</div>

<style>
  .stats-row {
    @apply flex justify-between flex-wrap;
  }

  .stats-col {
    @apply mb-4;
    flex: 50%;

    @screen md {
      @apply flex-1 mb-0;
    }

    :global(.avatar) {
      @apply w-16 h-16 shadow;
    }
  }
</style>
