<script>
  import Marker from "../map/Marker.svelte";
  import Polyline from "../map/Polyline.svelte";
  import InfoWindow from "../map/InfoWindow.svelte";
  import {getLast} from "../utils/get";
  import {getCoords} from "../utils/map";
  import {formatDistance} from "../utils/format";
  import GameItemAddOption from "./top/GameItemAddOption.svelte";
  import OffsetableMap from "../map/OffsetableMap.svelte";
  import StatItem from "../stats/StatItem.svelte";

  export let items = [];

  let last;
  let lastCoords;
  let itemsCoords;
  let allItemsCoords;

  $: last = getLast(items);
  $: lastCoords = getCoords(last.city);

  $: itemsCoords = items.slice(-2).map(i => getCoords(i.city));
  $: allItemsCoords = items.map(i => getCoords(i.city));
</script>

<OffsetableMap center={lastCoords}>
  {#each items as {id, city} (id)}
    <Marker
      position={getCoords(city)}
      opacity={0.4}
      text={city.name}
      icon={'none'}
    />
  {/each}

  <Polyline path={itemsCoords}/>
  <Polyline path={allItemsCoords} opacity={0.1}/>

  <InfoWindow position={lastCoords}>
    <div class="map-info-window">
      <GameItemAddOption {...last.city}/>
      {#if last.distance}
        <StatItem value="+{formatDistance(last.distance)}"/>
      {/if}
    </div>
  </InfoWindow>
</OffsetableMap>

<style>
  .map-info-window {
    @apply font-sans text-base font-normal;
    @apply flex items-center justify-between;
  }

  :global(.gm-style-iw, .gm-style-iw-d) {
    min-width: 328px;
  }

  :global(button.gm-ui-hover-effect) {
    @apply hidden !important;
  }
</style>
