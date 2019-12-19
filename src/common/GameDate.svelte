<script>
  import Tag from '../ui/Tag.svelte';
  import {toHuman} from '../utils/date';
  import {_} from '../i18n';

  /** @type IGame */
  export let game;
</script>

{#if game.finishedAt}
  <Tag>
    {$_('finished-at')} {toHuman(game.finishedAt)}
  </Tag>
{:else if game.startedAt}
  <Tag color="green">
    {$_('started-at')} {toHuman(game.startedAt)}
  </Tag>
{/if}
