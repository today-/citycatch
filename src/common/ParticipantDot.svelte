<script>
  import Icon from "../icon/Icon.svelte";
  import Blinker from "../ui/Blinker.svelte";
  import Circle from "../icon/close-circle.svg";
  import StarColor from "../icon/star-color.svg";
  import ClockCircle from "../icon/clock-circle.svg";

  export let order;
  export let isActive;
  export let participantOrder;
</script>

{#if isActive && order === participantOrder}
  <Blinker/>
{:else if participantOrder < 0}
  <Icon icon={Circle}/>
{:else if !isActive && participantOrder >= 0}
  <Icon icon={StarColor}/>
{:else}
  <Icon icon={ClockCircle}/>
{/if}
