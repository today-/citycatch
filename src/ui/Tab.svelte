<script>
  import {getContext} from 'svelte';
  import {TABS} from './Tabs.svelte';

  const {registerTab, selectedTab, updateBadge} = getContext(TABS);

  export let name;
  export let badge;
  const tab = {name};

  registerTab(tab);

  $: badge && updateBadge(tab, badge)
</script>

<div class="tab" class:visible={$selectedTab === tab}>
  <slot/>
</div>

<style>
  .tab {
    @apply opacity-0 h-0 overflow-hidden;

    &.visible {
      @apply opacity-100 h-full;
    }
  }
</style>



