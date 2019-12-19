<script>
  export let src;
  export let alt = '';
  /** @type {'large'|'small'|'default'} */
  export let size;
</script>

<img
  class="avatar"
  class:large={size === 'large'}
  class:small={size === 'small'}
  src={src}
  alt={alt}
/>

<style>
  .avatar {
    @apply h-8 w-8 rounded-full flex-shrink-0;
    max-width: initial;

    &.large {
      @apply h-24 w-24;
    }

    &.small {
      @apply h-6 w-6;
    }
  }
</style>
