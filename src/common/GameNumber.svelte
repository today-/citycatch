<script>
  import Badge from '../ui/Badge.svelte';
  import {_} from '../i18n';

  export let id;
</script>

<Badge>
  {$_('#')}{id}
</Badge>
