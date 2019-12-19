<script>
  import Tabs from "../../ui/Tabs.svelte";
  import Tab from "../../ui/Tab.svelte";
  import GameParticipants from "./GameParticipants.svelte";
  import GameItems from "./GameItems.svelte";
  import {_} from '../../i18n';

  /** @type IParticipant[] */
  export let participants;
  /** @type IGameItem[] */
  export let items;
  /** @type number */
  export let order;
  /** @type boolean */
  export let isActive;
</script>

<div class="game-right">
  <Tabs>
    <Tab name={$_('game-participants')} badge={participants.length}>
      <GameParticipants
        isActive={isActive}
        participants={participants}
        order={order}
      />
    </Tab>
    <Tab name={$_('game-cities')} badge={items.length}>
      <GameItems
        participants={participants}
        items={items}
      />
    </Tab>
  </Tabs>
</div>

<style>
  .game-right {
    @apply bg-white relative rounded shadow p-3 float-right w-full;
    @apply mt-24;
    max-width: 25rem;
    min-height: 200px;
    height: calc(100vh - 265px);

    :global(.timeline) {
      @apply h-full overflow-y-auto;
    }

    @screen sm {
      @apply mt-3;
      height: calc(100vh - 185px);
    }
  }
</style>
