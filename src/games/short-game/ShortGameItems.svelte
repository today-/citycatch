<script>
  import CityPair from "../../common/CityPair.svelte";

  /** @type IGameItem[] */
  export let items = [];
  /** @type number */
  export let itemsCount;
  /** @type boolean */
  export let hideCount = false;

  let first = items[0];
  let last = items[items.length - 1];
</script>

<div class="short-game-items">
  <CityPair
    fromCity={first.city}
    toCity={last.city}
    itemsCount={itemsCount}
    hideCount={hideCount}
  />
</div>
