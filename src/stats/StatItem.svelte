<script>
  export let value;
  export let title = null;
  export let suffix = null;
</script>

<div class="stat-item">
  {#if title}
    <div class="title">
      {title}
    </div>
  {/if}
  <div class="content">
    <span class="prefix">
      <slot/>
    </span>
    {value}
    {#if suffix}
      <span class="suffix">
        {suffix}
      </span>
    {/if}
  </div>
</div>

<style>
  .title {
    @apply mb-2 text-sm;
  }

  .content {
    @apply text-xl flex items-center;
  }

  .prefix {
    @apply inline-block mr-1;
  }

  .suffix {
    @apply inline-block ml-1 text-sm;
  }
</style>
