<script>
  import {newGame, postNewGame, resetNewGame} from '../stores/new-game';
  import Popover from "../ui/Popover.svelte";
  import Button from "../ui/Button.svelte";
  import Icon from "../icon/Icon.svelte";
  import Plus from '../icon/plus.svg';
  import {_} from '../i18n';
</script>

<div class="new-game-button">
  <Popover
    visible={Boolean($newGame.error)}
    content={$newGame.error}
    on:click={resetNewGame}
  >
    <Button
      on:click={postNewGame}
      disabled={$newGame.loading}
    >
      <Icon icon={Plus}/>
      {$_('start-new-game')}
    </Button>
  </Popover>
</div>

<style>
  .new-game-button {
    @apply mb-2;
  }
</style>
