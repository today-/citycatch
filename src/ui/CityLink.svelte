<script>
  /** @type ICity */
  export let city;
</script>

{#if city && city.url}
  <a href={city.url} target="_blank" class="city-link">
    <slot>{city && city.name}</slot>
  </a>
{:else}
  <slot>{city && city.name}</slot>
{/if}

<style>
  .city-link {
    @apply text-text transition-color;

    &:hover {
      @apply text-primary;
    }
  }
</style>
