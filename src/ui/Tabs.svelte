<script context="module">
  export const TABS = {};
</script>

<script>
  import {setContext, onDestroy} from 'svelte';
  import {writable} from 'svelte/store';
  import Badge from "./Badge.svelte";

  let tabs = [];
  let badges = [];
  const selectedTab = writable(null);

  function selectTab(tab) {
    selectedTab.set(tab);
  }

  function updateBadge(tab, badge) {
    badges[tabs.indexOf(tab)] = badge;
  }

  function registerTab(tab) {
    tabs = [...tabs, tab];
    badges = [...badges, tab.badge];
    selectedTab.update(current => current || tab);

    onDestroy(() => {
      const i = tabs.indexOf(tab);
      tabs = tabs.filter(t => t !== tab);
      selectedTab.update(current => current === tab ? (tabs[i] || tabs[tabs.length - 1]) : current);
    });
  }

  setContext(TABS, {registerTab, selectedTab, updateBadge});
</script>

<div class="tabs">
  <div class="tabs-buttons">
    {#each tabs as tab, index}
      <button
        class:selected={$selectedTab === tab}
        on:click={() => selectTab(tab)}
      >
        {tab.name}
        {#if badges[index]}
          <Badge>{badges[index]}</Badge>
        {/if}
      </button>
    {/each}
  </div>
  <div class="tabs-pane">
    <slot/>
  </div>
</div>

<style>
  .tabs {
    @apply w-full h-full;
  }

  .tabs-buttons {
    @apply border-b border-gray-200;

    button {
      @apply relative outline-none py-2 px-4 mr-4;
      @apply border-b-2 border-transparent transition-border;

      &.selected {
        @apply border-primary;
      }
    }
  }

  .tabs-pane {
    height: calc(100% - 2.75rem);
  }
</style>
