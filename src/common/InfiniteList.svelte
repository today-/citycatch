<script>
  import {locale} from '../i18n';
  import Spinner from '../ui/Spinner.svelte';
  import Observer from './Observer.svelte';
  import Conditional from './Conditional.svelte';

  export let onLoadMore = () => {};
  export let error;
  export let loading;
  let page = 1;

  function handleScroll() {
    if (!loading) {
      page += 1;
      onLoadMore(page);
    }
  }

  function reload() {
    page = 1;
    onLoadMore(page);
  }

  $: $locale && reload();
</script>

<Conditional
  error={error}
  loading={loading && page <= 1}
>
  <slot/>

  {#if loading}
    <Spinner large/>
  {/if}

  <Observer on:message={handleScroll}/>
</Conditional>

