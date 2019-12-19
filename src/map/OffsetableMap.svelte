<script>
  import {onMount} from 'svelte';
  import LoadScript from './LoadScript.svelte';
  import GoogleMap from './GoogleMap.svelte';

  export let center;

  let offsetX = 0;
  let offsetY = 0;

  function handleResize() { // magic numbers, sorry
    const ww = Math.min(window.innerWidth, 1280);
    const wh = window.innerHeight;

    if (ww <= 640) {
      offsetX = 0;
      offsetY = wh / 2 - 230;
    } else {
      offsetX = (ww - 416) / 4;
      offsetY = 0;
    }
  }

  onMount(() => {
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize)
  });
</script>

<LoadScript>
  <GoogleMap center={center} zoom={3} offsetX={offsetX} offsetY={offsetY}>
    <slot/>
  </GoogleMap>
</LoadScript>
