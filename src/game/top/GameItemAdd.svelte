<script>
  import {search, resetSearch, getDebouncedSearch} from "../../stores/search";
  import Autocomplete from "../../ui/Autocomplete.svelte";
  import GameItemAddOption from "./GameItemAddOption.svelte";
  import Letter from "../../ui/Letter.svelte";
  import {addItem} from "../../stores/items";
  import Spinner from "../../ui/Spinner.svelte";
  import Alert from "../../ui/Alert.svelte";
  import {_} from '../../i18n';

  export let gameId;
  export let letter;

  let q;
  let id;
  let {pending} = addItem;

  function handleSearch({detail: q}) {
    if (q.length >= 2 && !$pending) {
      getDebouncedSearch({q, id: gameId});
    }
  }

  function handleSelect({detail: option}) {
    resetSearch();
    id = option.id;
    addItem({gameId, id});

    q = option.name;
  }
</script>

<Autocomplete
  name="q"
  options={$search.result || []}
  renderer={GameItemAddOption}
  on:change={handleSearch}
  on:select={handleSelect}
  bind:value={q}
  placeholder={$_('game-placeholder', {letter})}
  autofocus
>
  <div slot="prefix">
    <Letter letter={letter}/>
  </div>

  <div slot="suffix">
    {#if $search.loading || $pending}
      <Spinner/>
    {:else if $search.error}
      <Alert>{$search.error}</Alert>
    {/if}
  </div>
</Autocomplete>
