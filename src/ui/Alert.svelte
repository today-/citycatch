<script>
  import Tag from "./Tag.svelte";
  import Icon from "../icon/Icon.svelte";
  import InfoCircle from "../icon/info-circle.svg";
</script>

<Tag color="red">
  <Icon icon={InfoCircle}/> <slot/>
</Tag>
