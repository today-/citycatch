<script>
  import {createEventDispatcher} from 'svelte';
  import Input from "./Input.svelte";
  import Dropdown from "./Dropdown.svelte";

  const dispatch = createEventDispatcher();

  export let name;
  export let renderer;
  export let value = '';
  export let options = [];
  export let placeholder = '';
  export let autofocus = false;

  let isOpen = false;
  let highlightedIndex = -1;

  function handleSelect(option) {
    dispatch('select', option);
    highlightedIndex = -1;
  }

  function handleFocus() {
    isOpen = true;
  }

  function handleBlur() {
    isOpen = false;
  }

  function handleKeyDown(e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      highlightedIndex = (highlightedIndex >= options.length - 1) ? 0 : highlightedIndex + 1;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      highlightedIndex = (highlightedIndex <= 0) ? options.length - 1 : highlightedIndex - 1;
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleSelect(options[Math.min(highlightedIndex, 0)]);
    } else if (e.key === 'Escape') {
      handleBlur();
    }
  }

  $: value && dispatch('change', value);
  $: value && options.length && handleFocus();
</script>

<div class="autocomplete">
  <Input
    bind:value
    name={name}
    class="autocomplete-input"
    on:focus={handleFocus}
    on:blur={handleBlur}
    on:keydown={handleKeyDown}
    placeholder={placeholder}
    autofocus={autofocus}
  >
    <div slot="prefix"><slot name="prefix"/></div>
    <div slot="suffix"><slot name="suffix"/></div>
  </Input>
  <Dropdown isOpen={Boolean(options && options.length && isOpen)}>
    {#each options as option, index}
      <a
        href="/"
        on:click|preventDefault|stopPropagation={() => handleSelect(option)}
        class:highlighted={highlightedIndex === index}
      >
        {#if renderer}
          <svelte:component this={renderer} {...option}/>
        {:else}
          {option}
        {/if}
      </a>
    {/each}
  </Dropdown>
</div>

<style>
  .autocomplete {
    @apply relative;
  }
</style>

