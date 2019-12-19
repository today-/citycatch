<script>
  import TimelineItem from "../../ui/TimelineItem.svelte";
  import ParticipantAvatar from "../../common/ParticipantAvatar.svelte";
  import Icon from "../../icon/Icon.svelte";
  import Image from "../../ui/Image.svelte";
  import CityLink from "../../ui/CityLink.svelte";
  import CheckCircle from "../../icon/check-circle.svg";
  import PlusCircle from "../../icon/plus-circle.svg";
  import {formatDistance} from "../../utils/format";

  /** @type IParticipant */
  export let participant;
  /** @type IGameItem */
  export let item;
</script>

<TimelineItem>
  <div slot="head">
    {#if participant}
      <ParticipantAvatar
        size="small"
        user={participant.user}
      />
    {/if}
  </div>

  <div slot="image">
    <CityLink city={item.city}>
      <Image src={item.city.pic} shadow/>
    </CityLink>
  </div>

  <div>
    <CityLink city={item.city}/>

    <div class="item-distance">
      {#if item.distance > 0}
        <Icon icon={PlusCircle}/>
        {formatDistance(item.distance)}
      {:else}
        <Icon icon={CheckCircle}/>
      {/if}
    </div>
  </div>
</TimelineItem>

<style>
  .item-distance {
    @apply flex text-xs text-muted;

    :global(i) {
      @apply mr-1;
    }
  }
</style>
