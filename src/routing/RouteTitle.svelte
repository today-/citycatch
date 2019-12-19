<script>
  import {_} from '../i18n';

  export let title = '';
  let i18n;
  let titleSuffix;

  $: i18n = $_(title);
  $: titleSuffix = i18n ? ` - ${i18n}` : '';
</script>

<svelte:head>
  <title>CityCatch{titleSuffix}</title>
</svelte:head>
