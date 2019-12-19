<script>
  export let muted = false;
</script>

<li class="timeline-item" class:muted>
  <div class="timeline-item-head">
    <slot name="head"><div class="timeline-item-dot"/></slot>
  </div>
  <div class="timeline-item-image">
    <slot name="image"/>
  </div>
  <div class="timeline-item-content">
    <slot/>
  </div>
</li>

<style>
  .timeline-item {
    @apply flex py-2 relative items-center z-2;

    &:before {
      @apply absolute border-l-2 border-dashed border-gray-300 z-0 -ml-px;
      top: 2.5rem;
      left: 1.5rem;
      bottom: -1.5rem;
      width: 2px;
      content: "";
    }

    &:last-of-type {
      &:before {
        @apply hidden;
      }
    }

    &.muted {
      :global(&), :global(i), :global(span) {
        @apply text-muted !important;
      }

      :global(img) {
        @apply opacity-40;
      }
    }
  }

  .timeline-item-head {
    @apply w-12 h-12 flex items-center justify-center z-1 text-primary relative;
  }

  .timeline-item-dot {
    @apply w-2 h-2 border-2 border-primary rounded-full;
  }

  .timeline-item-image {
    > :global(*) {
      @apply mr-3;
    }
  }

  .timeline-item-content {
    @apply flex items-center justify-between;

    :global(img) {
      @apply mr-3;
    }
  }
</style>
