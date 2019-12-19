<script>
  import Timeline from "../ui/Timeline.svelte";
  import GameItemAddOption from "../game/top/GameItemAddOption.svelte";
  import TimelineItem from "../ui/TimelineItem.svelte";
  import Compass from "../icon/compass.svg";
  import Icon from "../icon/Icon.svelte";
  import {formatDistance} from "../utils/format";

  const {from, to} = $$props;
</script>

<Timeline>
  <TimelineItem>
    <GameItemAddOption {...from.city}/>
  </TimelineItem>
  <TimelineItem>
    <div slot="head"><Icon icon={Compass}/></div>
    {formatDistance(to.distance)}
  </TimelineItem>
  <TimelineItem>
    <GameItemAddOption {...to.city}/>
  </TimelineItem>
</Timeline>
