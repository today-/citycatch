<script>
  import {onDestroy} from 'svelte';
  import NewGameButton from './NewGameButton.svelte';
  import {gamesError, gamesIds, hasActiveGames, hasMoreGames, getGames, resetGames} from '../stores/games';
  import InfiniteList from '../common/InfiniteList.svelte';
  import PusherIndex from '../pusher/PusherIndex.svelte';
  import ShortGame from './short-game/ShortGame.svelte';
  import NoGames from './NoGames.svelte';

  function handleLoadMore(page) {
    if ($hasMoreGames) {
      getGames({page});
    }
  }

  let {pending} = getGames;
  let canStartNewGame;
  $: canStartNewGame = Boolean(!$pending && !$gamesError && !$hasActiveGames);

  onDestroy(() => resetGames());
</script>

<PusherIndex/>

{#if canStartNewGame}
  <NewGameButton/>
{/if}

<InfiniteList
  onLoadMore={handleLoadMore}
  error={$gamesError}
  loading={$pending}
>
  {#each $gamesIds as id}
    <ShortGame id={id}/>
  {:else}
    <NoGames/>
  {/each}
</InfiniteList>



