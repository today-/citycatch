<script>
  import {onMount} from "svelte";
  import {injectScript} from "../utils/injectScript";

  export let key = `${process.env.GOOGLE_MAPS_KEY}`;
  export let id = 'map-loader';

  let loaded = false;

  let url = `https://maps.googleapis.com/maps/api/js?key=${key}&v=weekly&callback=initMap`;

  onMount(async () => {
    if (typeof window !== 'undefined') {
      if (!window.google) {
        await injectScript({url, id});
      }
      loaded = true;
    }
  });
</script>

{#if loaded}
  <slot/>
{/if}
