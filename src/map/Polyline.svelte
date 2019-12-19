<script>
  import {getContext, onDestroy, onMount} from "svelte";
  import {POLYLINE_OPTIONS} from "./options";

  const map = getContext('map').getMap();

  /** @type google.maps.MVCArray<google.maps.LatLng> | google.maps.LatLng[] | google.maps.LatLngLiteral[] */
  export let path;
  /** @type number */
  export let opacity = 0.5;

  /** @type google.maps.Polyline */
  let polyline;

  $: polyline && path && polyline.setPath(path);

  onMount(() => {
    polyline = new google.maps.Polyline({
      ...POLYLINE_OPTIONS,
      strokeOpacity: opacity,
      map
    });
  });

  onDestroy(() => {
    polyline.setMap(null);
  });
</script>
