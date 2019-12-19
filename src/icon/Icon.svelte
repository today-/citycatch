<script>
  export let icon;

  let node = icon({ width: '1em', height: '1em', fill: 'currentColor' });
  let stringIcon = node.outerHTML;
  if (!stringIcon && window.XMLSerializer) {
    stringIcon = new window.XMLSerializer().serializeToString(node);
  }
</script>

<i class="icon">
  {@html stringIcon || ''}
</i>

<style>
  .icon {
    @apply flex items-center justify-center antialiased;
    line-height: 0;

    :global(svg) {
      @apply inline;
    }

    > :global(*) {
      line-height: 1;
    }
  }
</style>
