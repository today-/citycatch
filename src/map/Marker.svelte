<script>
  import {getContext, onDestroy, onMount} from "svelte";

  const map = getContext('map').getMap();

  export let text;
  /** @type ICoords */
  export let position;
  /** @type google.maps.Icon */
  export let icon;
  /** @type number */
  export let opacity;

  /** @type google.maps.Marker */
  let marker;

  $: marker && text && marker.setLabel({fontSize: '6', text});
  $: marker && position && marker.setPosition(position);
  $: marker && icon && marker.setIcon(icon);
  $: marker && opacity && marker.setOpacity(opacity);

  onMount(() => {
    marker = new google.maps.Marker({position, map, icon, opacity});
  });

  onDestroy(() => {
    marker.setMap(null);
  });
</script>
