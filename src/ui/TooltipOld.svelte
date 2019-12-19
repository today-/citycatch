<script>
  import {fade} from 'svelte/transition';

  export let title;
  export let position = "top";

  let hovering = false;

  function enter() {
    hovering = true;
  }
  function leave() {
    hovering = false;
  }
  function toggle() {
    hovering = !hovering;
  }
</script>

<div class="tooltip" on:mouseenter={enter} on:mouseleave={leave} on:click={toggle}>
  <slot/>
  {#if hovering}
    <div class="tooltip-title" transition:fade={{duration: 175}} class:left={position === 'left'}>
      {title}
    </div>
  {/if}
</div>

<style>
  .tooltip {
    @apply relative inline-block;
  }

  .tooltip-title {
    @apply absolute bg-black text-white whitespace-no-wrap shadow rounded py-1 px-2 transition-all opacity-75 z-10;
    top: -0.25rem;
    left: 50%;
    transform: translate(-50%, -100%);

    &::before {
      @apply absolute block bg-black opacity-75 w-2 h-2 bottom-0 right-0;
      content: '';
      pointer-events: auto;
      transform: translateX(-50%) translateY(50%) rotate(45deg);
      left: 50%;
    }

    &.left {
      top: 0;
      left: -0.25rem;
      transform: translate(-100%, 0%);
    }
  }
</style>
