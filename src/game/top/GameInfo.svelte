<script>
  import Letter from "../../ui/Letter.svelte";
  import GameDate from "../../common/GameDate.svelte";
  import GameDistance from "../../common/GameDistance.svelte";
  import ParticipantAvatar from "../../common/ParticipantAvatar.svelte";
  import ParticipateGameButton from "./ParticipateGameButton.svelte";
  import {getCurrentParticipant} from "../../utils/game-reducers";
  import {_} from '../../i18n';

  /** @type IGame */
  export let game;

  let current;
  $: current = getCurrentParticipant(game);
</script>

<div class="game-top">
  {#if game.isActive}
    <div class="game-top-current">
      {#if current}
        <ParticipantAvatar user={current.user}/>
        <span class="game-top-thinking" class:hidable={game.canParticipate}>
          {$_('thinking-of')}
        </span>
        <Letter letter={game.lastLetter}/>
      {/if}
    </div>

    {#if game.canParticipate}
      <div class="game-top-right">
        <ParticipateGameButton id={game.id}/>
      </div>
    {/if}
  {:else}
    <GameDate game={game}/>
    <GameDistance game={game}/>
  {/if}
</div>

<style>
  .game-top {
    @apply flex items-center;
    min-height: 42px;

    :global(.tag) {
      @apply mr-2;
    }
  }

  .game-top-current {
    @apply flex items-center flex-1;

    > :global(*) {
      @apply mr-1;
    }
  }

  .game-top-thinking {
    @apply text-sm;

    &.hidable {
      @apply hidden text-sm;

      @screen sm {
        @apply inline;
      }
    }
  }

  .game-top-right {
    @apply float-right;
  }
</style>

