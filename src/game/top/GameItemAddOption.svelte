<script>
  import Image from "../../ui/Image.svelte";
  import CityLink from "../../ui/CityLink.svelte";

  export let name;
  export let pic;
  /** @type ICountry */
  export let country = null;
  export let region = null;
</script>

<div class="game-item-add-option">
  <CityLink city={$$props}>
    <Image
      src={pic}
      size="large"
      shadow
    />
  </CityLink>
  <div class="details">
    <CityLink city={$$props}>{name}</CityLink>

    {#if country}
      <div class="meta">
        <Image src={country.pic} size="small"/> {country.name}
      </div>
    {/if}

    {#if region}
      <div class="meta">
        <Image src={region.pic} size="small"/> {region.name}
      </div>
    {/if}
  </div>
</div>

<style>
  .game-item-add-option {
    @apply flex;
  }

  .details {
    @apply pl-2;
  }

  .meta {
    @apply text-xs;
    line-height: 0.76rem;

    :global(.image) {
      @apply mr-2;
    }
  }
</style>

