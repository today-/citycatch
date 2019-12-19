<script>
  import {isMobile} from "../utils/isMobile";
  import Dropdown from "../ui/Dropdown.svelte";

  export let isOpen = false;
  let isClosing = false;

  function open() {
    isOpen = true;
    isClosing = false;
  }

  function close() {
    isClosing = true;
    setTimeout(() => {
      if (isClosing) {
        isOpen = false;
      }
    }, isMobile() ? 0 : 500);
  }

  function toggleOpen() {
    isOpen = !isOpen;
  }
</script>

<div class="submenu" on:mouseover={open} on:mouseout={close} on:touchend={toggleOpen}>
  <div class="submenu-opener">
    <slot name='opener'/>
  </div>

  <Dropdown isOpen={isOpen} isMenu on:click={toggleOpen}>
    <slot/>
  </Dropdown>
</div>

<style>
  .submenu {
    @apply relative inline-block;
  }

  .submenu-opener {
    @apply inline-flex items-center p-2 font-semibold cursor-pointer;
  }
</style>
