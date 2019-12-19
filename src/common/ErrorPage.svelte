<script>
  import Icon from '../icon/Icon.svelte';
  import Api from '../icon/api.svg';

  export let title = 'Error';
  export let text = '';
</script>

<div class="error-page">
  <div class="error-icon">
    <Icon icon={Api}/>
  </div>
  <div>
    <h1 class="error-title">
      {title}
    </h1>
    <div class="error-text">
      {text}
    </div>
  </div>
</div>

<style>
  .error-page {
    @apply flex w-1/2 pt-24 mx-auto items-center justify-center;
  }

  .error-title {
    @apply my-4 text-3xl text-primary font-bold leading-tight;
  }

  .error-icon {
    @apply text-5xl mr-8 text-primary;
  }
</style>
