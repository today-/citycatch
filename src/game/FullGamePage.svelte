<script>
  import {onDestroy} from "svelte";
  import Conditional from "../common/Conditional.svelte";
  import {game, getGame, resetCurrentGame} from "../stores/game";
  import FullGame from "./FullGame.svelte";
  import {locale} from '../i18n';

  export let id;

  $: $locale && getGame(id);

  onDestroy(() => resetCurrentGame());
</script>

<Conditional
  error={$game.error}
  loading={$game.loading}
>
  {#if $game.result}
    <FullGame game={$game.result}/>
  {/if}
</Conditional>



