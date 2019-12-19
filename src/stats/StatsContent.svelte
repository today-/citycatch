<script>
  import {_} from '../i18n';
  import Card from "../ui/Card.svelte";
  import TopUsers from "./TopUsers.svelte";
  import StatsTotal from "./StatsTotal.svelte";
  import StatsCityPair from "./StatsCityPair.svelte";
  import {formatDistance, formatNumber} from "../utils/format";
  import StatsGame from "./StatsGame.svelte";
  import StatItem from "./StatItem.svelte";

  /** @type IStats */
  export let result;
  /** @type IUser */
  export let currentUser;

  const {total, user, top, games, pairs} = result;
</script>

<Card title={$_('stats-all-users')}>
  <StatsTotal total={total}/>
</Card>

<Card title={currentUser.name}>
  <StatsTotal total={user} currentUser={currentUser}/>
</Card>

<Card title={$_('stats-top-by-wins')}>
  <TopUsers top={top.byWins}/>
</Card>

<Card title={$_('stats-top-by-games')}>
  <TopUsers top={top.byGames}/>
</Card>

<Card title={$_('stats-top-by-distance')}>
  <TopUsers top={top.byDistance}/>
</Card>

<Card title={$_('stats-games-by-distance')}>
  {#each games.byDistance as game (game.id)}
    <StatsGame game={game}>
      <StatItem value={formatDistance(game.distance)}/>
    </StatsGame>
  {/each}
</Card>

<Card title={$_('stats-games-by-items')}>
  {#each games.byItems as game (game.id)}
    <StatsGame game={game}>
      <StatItem
        value="{formatNumber(game.itemsCount)} {$_('stats-count-items', game.itemsCount)}"
      />
    </StatsGame>
  {/each}
</Card>

<div class="stats-row">
  <Card title={$_('stats-pair-farthest')}>
    <StatsCityPair {...pairs.far}/>
  </Card>
  <Card title={$_('stats-pair-closest')}>
    <StatsCityPair {...pairs.short}/>
  </Card>
</div>

<style>
  .stats-row {
    @apply flex justify-between flex-wrap;

    > :global(*) {
      @apply w-full;

      @screen md {
        width: calc(50% - 0.5rem);
      }
    }
  }
</style>
