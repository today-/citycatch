<script>
  import Timeline from "../../ui/Timeline.svelte";
  import TimelineItem from "../../ui/TimelineItem.svelte";
  import ParticipantAvatar from "../../common/ParticipantAvatar.svelte";
  import ParticipantDot from "../../common/ParticipantDot.svelte";
  import {formatDistance} from "../../utils/format";
  import Icon from "../../icon/Icon.svelte";
  import Compass from "../../icon/compass.svg";

  /** @type IParticipant[] */
  export let participants;
  /** @type number */
  export let order;
  /** @type boolean */
  export let isActive;
</script>

<Timeline>
  {#each participants as p (p.id)}
    <TimelineItem muted={p.order < 0}>
      <div slot="head">
        <ParticipantDot
          order={order}
          isActive={isActive}
          participantOrder={p.order}
        />
      </div>

      <div slot="image">
        <ParticipantAvatar user={p.user}/>
      </div>

      <div>
        <div>{p.user.name}</div>
        <div class="participant-distance">
          <Icon icon={Compass}/>
          {#if p.distance > 0}
            {formatDistance(p.distance)}
          {/if}
        </div>
      </div>
    </TimelineItem>
  {/each}
</Timeline>

<style>
  .participant-distance {
    @apply flex text-xs text-muted;

    :global(i) {
      @apply mr-1;
    }
  }
</style>
