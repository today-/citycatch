<script>
  import Avatar from "../ui/Avatar.svelte";

  /** @type IUser */
  export let user = {};
  /** @type {'large'|'small'|'default'} */
  export let size = null;
</script>

<Avatar
  src={user.pic}
  alt={user.name}
  size={size}
/>
