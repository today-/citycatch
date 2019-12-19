<script>
  import {Link} from "svelte-routing";
  import {games} from '../../stores/games';
  import Card from "../../ui/Card.svelte";
  import Tag from "../../ui/Tag.svelte";
  import ShortGameParticipants from "./ShortGameParticipants.svelte";
  import GameDistance from "../../common/GameDistance.svelte";
  import GameNumber from "../../common/GameNumber.svelte";
  import ShortGameItems from "./ShortGameItems.svelte";
  import GameDate from "../../common/GameDate.svelte";
  import Icon from "../../icon/Icon.svelte";
  import User from "../../icon/user.svg";
  import {_} from "../../i18n";

  export let id;

  /** @type IGame */
  const game = games.map(g => g[id]);
</script>

<Link to="/game/{$game.id}">
  <Card hoverable active={$game.isParticipating && $game.isActive}>
    <div class="short-game-top-row">
      <ShortGameItems
        items={$game.items}
        itemsCount={$game.itemsCount}
      />
      <ShortGameParticipants
        participants={$game.participants}
        order={$game.order}
      />
    </div>
    <div class="short-game-row">
      <GameDate game={$game}/>

      {#if $game.isParticipating}
        <Tag color="primary">
          <Icon icon={User}/>
          {$_('is-participating')}
        </Tag>
      {/if}

      <GameDistance game={$game}/>
    </div>

    <GameNumber id={$game.id}/>
  </Card>
</Link>

<style>
  .short-game-top-row {
    @apply flex items-start justify-between flex-wrap;

    :global(.short-game-items) {
      @apply w-full;

      @screen sm {
        @apply w-auto;
      }
    }
  }

  .short-game-row {
    @apply flex items-center flex-wrap;

    > :global(*) {
      @apply mr-2 mt-2;
    }
  }
</style>
