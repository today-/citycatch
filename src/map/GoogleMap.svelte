<script>
  import {onMount, setContext} from 'svelte';
  import {MAP_OPTIONS} from "./options";

  /** @type ICoords */
  export let center;
  /** @type number */
  export let zoom;
  export let offsetX = 0;
  export let offsetY = 0;
  /** @type google.maps.Map */
  let map;

  let container;

  setContext('map', { getMap: () => map });

  function setCenter(v, x, y) {
    map.panTo(v);
    map.panBy(x, y);
  }

  const setZoom = v => map.setZoom(Number(v));

  $: map && setCenter(center, offsetX, offsetY);
  $: map && setZoom(zoom);

  onMount(() => {
    map = new google.maps.Map(container, MAP_OPTIONS);

    google.maps.event.addListenerOnce(map, 'idle', () => setCenter(center, offsetX, offsetY));
  });
</script>

<div class="map" bind:this={container}>
  {#if map}
    <slot/>
  {/if}
</div>

<style>
  .map {
    @apply absolute h-full w-full top-0 left-0;
  }
</style>
