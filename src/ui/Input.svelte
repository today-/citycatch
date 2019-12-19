<script>
  export let name;
  export let value = '';
  export let id = undefined;

  let fallbackPrefix;
</script>

<div class="input-wrapper">
  <label for={id || name} class="input-prefix">
    <slot name="prefix">
      <div bind:this={fallbackPrefix}/>
    </slot>
  </label>

  <input
    {...$$props}
    id={id || name}
    type="text"
    class="input"
    class:prefix={!Boolean(fallbackPrefix)}
    autocomplete="off"
    bind:value
    on:focus
    on:blur
    on:keydown
  >

  <label for={id || name} class="input-suffix">
    <slot name="suffix"/>
  </label>
</div>

<style>
  .input-wrapper {
    @apply relative;
  }

  .input {
    @apply block w-full text-base leading-normal p-2 border rounded appearance-none;
    @apply bg-gray-200 border-gray-300 transition-all;

    &:hover {
      @apply bg-gray-100 border-gray-200;
    }

    &:focus {
      @apply bg-white outline-none shadow-outline border-purple-100;
    }

    &.prefix {
      @apply pl-10;
    }
  }

  .input-prefix, .input-suffix {
    @apply absolute cursor-text flex items-center justify-center h-10 py-px;
  }

  .input-prefix {
    @apply w-10;
  }

  .input-suffix {
    @apply top-0 right-0 mr-3;
  }
</style>
