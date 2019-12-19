<script>
  import Button from "../../ui/Button.svelte";
  import Popover from "../../ui/Popover.svelte";
  import {participateGame, postParticipateGame, resetParticipate} from '../../stores/participate-game';
  import {_} from '../../i18n';

  export let id;
</script>

<Popover
  content={$participateGame.error}
  visible={Boolean($participateGame.error)}
  onVisibleChange={resetParticipate}
  direction="left"
>
  <Button
    on:click={() => postParticipateGame(id)}
    disabled={$participateGame.loading}
  >
    {$_('participate-game')}
  </Button>
</Popover>
