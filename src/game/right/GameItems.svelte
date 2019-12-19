<script>
  import {afterUpdate} from "svelte";
  import Timeline from "../../ui/Timeline.svelte";
  import GameRightItem from "./GameRightItem.svelte";

  /** @type IParticipant[] */
  export let participants;
  /** @type IGameItem[] */
  export let items;

  let timelineRef;

  afterUpdate(() => {
    timelineRef.scrollTop = timelineRef.scrollHeight;
  });
</script>

<Timeline bind:ref={timelineRef}>
  {#each items as item (item.id)}
    <GameRightItem
      item={item}
      participant={participants.find(p => Number(p.id) === Number(item.participantId))}
    />
  {/each}
</Timeline>
