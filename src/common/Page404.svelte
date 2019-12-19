<script>
  import {_} from '../i18n';
  import ErrorPage from "./ErrorPage.svelte";
</script>

<ErrorPage
  title={$_('404-page')}
  text={$_('404-header')}
/>
