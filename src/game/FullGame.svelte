<script>
  import PusherGame from "../pusher/PusherGame.svelte";
  import RouteTitle from "../routing/RouteTitle.svelte";
  import {gameTitle, isMyTurn} from '../stores/game';
  import Card from "../ui/Card.svelte";
  import GameInfo from "./top/GameInfo.svelte";
  import GameRight from "./right/GameRight.svelte";
  import GameMap from "./GameMap.svelte";
  import GameItemAdd from "./top/GameItemAdd.svelte";
  import Countdown from "../common/Countdown.svelte";
  import {getLast} from "../utils/get";
  import GameNumber from "../common/GameNumber.svelte";

  /** @type IGame */
  export let game;

  let lastItem;
  let deadline;
  $: lastItem = game && getLast(game.items);
  $: deadline = lastItem && Date.now() + lastItem.expiredIn * 1000;
</script>

<PusherGame name="game.{game.id}"/>

<RouteTitle title={$gameTitle}/>

<GameMap items={game.items}/>

<Card>
  {#if $isMyTurn}
    <div class="game-turn">
      <GameItemAdd
        gameId={game.id}
        letter={game.lastLetter}
      />
      {#if deadline}
        <Countdown value={deadline}/>
      {/if}
    </div>
  {:else}
    <GameInfo game={game}/>
  {/if}
  <GameNumber id={game.id}/>
</Card>

<GameRight
  isActive={game.isActive}
  participants={game.participants}
  items={game.items}
  order={game.order}
/>

<style>
  .game-turn {
    @apply flex items-center;

    :global(.autocomplete) {
      @apply flex-1;
    }
    :global(.stat-item) {
      @apply w-16;
    }
  }
</style>
