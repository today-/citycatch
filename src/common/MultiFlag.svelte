<script>
  import {locale} from '../i18n';
</script>

<i
  class="multi-flag"
  class:ru={$locale !== 'ru'}
/>

<style>
  .multi-flag {
    width: 14px;
    height: 10px;
    background-image: url(https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg);

    &.ru {
      background-image: url(https://lipis.github.io/flag-icon-css/flags/4x3/ru.svg);
    }
  }
</style>
