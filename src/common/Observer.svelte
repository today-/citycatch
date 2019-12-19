<script>
  import {createEventDispatcher, onMount} from 'svelte';

  const dispatch = createEventDispatcher();

  let intersecting = false;
  let container;

  onMount(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(entries => {
        intersecting = entries[0].isIntersecting;

        if (intersecting) {
          dispatch('message', intersecting);
        }
      });

      observer.observe(container);
      return () => observer.unobserve(container);
    }

    function handler() {
      const bcr = container.getBoundingClientRect();
      intersecting = (
          bcr.bottom > 0 &&
          bcr.right > 0 &&
          bcr.top < window.innerHeight &&
          bcr.left < window.innerWidth
      );
    }

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  });
</script>

<div bind:this={container}></div>
