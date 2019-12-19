<script>
  export let visible = false;
  export let content = '';
  export let direction = 'right';
</script>

<div class="popover">
  <slot/>
  <div class="popover-content" class:visible class:left={direction === 'left'} on:click>
    {content || ''}
  </div>
</div>

<style>
  .popover {
    @apply relative inline-block;
  }

  .popover-content {
    @apply absolute bg-white text-sm shadow p-2 w-auto rounded inline-block mx-2;
    @apply opacity-0 invisible;

    &:before {
      @apply absolute border-solid transition-250 transition-transform;
      z-index: -1;
      content: "";
      top: calc(50% - 10px);
      left: -17px;
      border-width: 10px;
      border-color: transparent white transparent transparent;
    }

    &.visible {
      @apply z-10 opacity-100 visible;
      transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
    }

    &.left {
      transform: translateX(-100%);
      left: -17px;

      &:before {
        border-color: transparent transparent transparent white;
        left: initial;
        right: -17px;
      }
    }
  }
</style>
