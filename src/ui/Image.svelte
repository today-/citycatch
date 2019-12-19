<script>
  import Icon from "../icon/Icon.svelte";
  import Bank from "../icon/bank.svg";

  export let src;
  export let size = 'default';
  export let alt = '';
  export let icon = Bank;
  export let shadow = false;

  let isImgExist = true;

  function handleError() {
    isImgExist = false;
  }

  let style;
  $: style = (src && isImgExist) ? `background-image: url(${src})` : '';
</script>

<div
  class="image"
  style={style}
  class:large={size === 'large'}
  class:small={size === 'small'}
  class:shadow
>
  {#if src && isImgExist}
    <img
      src={src}
      alt={alt}
      on:error={handleError}
    />
  {:else}
    <Icon icon={icon}/>
  {/if}
</div>

<style>
  .image {
    @apply w-8 h-8 min-w-8 rounded-full bg-cover bg-center overflow-hidden inline-block;

    &.small {
      @apply w-2 h-2 min-w-2;
    }

    &.large {
      @apply w-12 h-12 min-w-12;
    }

    &.shadow {
      @apply shadow;
    }

    img {
      @apply opacity-0;
    }

    :global(i) {
      @apply bg-gray-200 w-full h-full;
    }
  }
</style>
