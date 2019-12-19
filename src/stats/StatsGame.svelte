<script>
  import {Link} from 'svelte-routing';
  import Card from '../ui/Card.svelte';
  import ShortGameItems from '../games/short-game/ShortGameItems.svelte';
  import GameNumber from '../common/GameNumber.svelte';

  /** @type IGame */
  export let game;
</script>

<div class="stats-game">
  <Link to="/game/{game.id}">
    <Card hoverable>
      <div class="stats-game-row">
        <ShortGameItems
          items={game.items}
          itemsCount={game.itemsCount}
          hideCount
        />
        <slot/>
      </div>
      <GameNumber id={game.id}/>
    </Card>
  </Link>
</div>

<style>
  .stats-game {
    :global(.stat-item .content) {
      @apply text-base;
    }

    &:last-of-type {
      :global(.card) {
        @apply mb-0;
      }
    }
  }

  .stats-game-row {
    @apply flex justify-between items-center flex-wrap overflow-hidden;

    @screen sm {
      overflow: initial;
    }
  }
</style>
