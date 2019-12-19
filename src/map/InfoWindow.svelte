<script>
  import {getContext, onDestroy, onMount} from "svelte";

  const map = getContext('map').getMap();

  /** @type ICoords */
  export let position;

  /** @type google.maps.InfoWindow */
  let infoWindow;

  let container;

  $: infoWindow && position && infoWindow.setPosition(position);
  $: infoWindow && container && infoWindow.setContent(container);

  onMount(() => {
    infoWindow = new google.maps.InfoWindow({position});

    infoWindow.open(map);
  });

  onDestroy(() => {
    infoWindow.close();
  });
</script>

<div class="info-window">
  <div bind:this={container}>
    <slot />
  </div>
</div>

<style>
  .info-window {
    display: none;
  }
</style>
