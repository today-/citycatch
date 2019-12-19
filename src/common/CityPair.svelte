<script>
  import Timeline from "../ui/Timeline.svelte";
  import {formatDistance, formatNumber} from "../utils/format";
  import TimelineItem from "../ui/TimelineItem.svelte";
  import Icon from "../icon/Icon.svelte";
  import Compass from "../icon/compass.svg";
  import Image from "../ui/Image.svelte";
  import Bank from "../icon/bank.svg";
  import {_} from "../i18n";

  /** @type ICity */
  export let fromCity;
  /** @type ICity */
  export let toCity = undefined;
  /** @type number */
  export let itemsCount;
  /** @type boolean */
  export let hideCount = false;
</script>

<Timeline>
  <TimelineItem>
    <div slot="head"><Icon icon={Bank}/></div>
    <Image src={fromCity.pic} size={hideCount ? 'default' : 'large'} shadow/>
    <span class="city-pair-name">{fromCity.name}</span>
  </TimelineItem>

  {#if itemsCount > 2 && !hideCount}
    <TimelineItem>
      <div slot="head">
        <Icon icon={Compass}/>
      </div>
      <span class="city-pair-count">
        {formatNumber(itemsCount - 2)} {$_('stats-count-items', itemsCount - 2)}
      </span>
    </TimelineItem>
  {/if}

  {#if itemsCount > 1}
    <TimelineItem>
      <div slot="head"><Icon icon={Bank}/></div>
      <Image src={toCity.pic} shadow/>
      <span class="city-pair-name">{toCity.name}</span>
    </TimelineItem>
  {/if}
</Timeline>

<style>
  .city-pair-name {
    @apply ml-2;
  }

  .city-pair-count {
    @apply text-sm;
  }
</style>
