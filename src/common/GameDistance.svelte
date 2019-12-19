<script>
  import {calcGameDistance} from '../utils/game-reducers';
  import {formatDistance} from '../utils/format';
  import Compass from '../icon/compass.svg';
  import Icon from '../icon/Icon.svelte';
  import Tag from '../ui/Tag.svelte';

  /** @type IGame */
  export let game;

  let distance;
  $: distance = calcGameDistance(game);
</script>

{#if distance}
  <Tag>
    <Icon icon={Compass}/> {formatDistance(distance)}
  </Tag>
{/if}
