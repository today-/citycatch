<script>
  import Icon from "../icon/Icon.svelte";
  import Compass from '../icon/compass.svg';

  export let large = false;
</script>

<div class="spinner">
  <div class="spinner-rotating" class:large>
    <Icon icon={Compass}/>
  </div>
</div>

<style>
  .spinner {
    @apply text-center;
  }

  .spinner-rotating {
    @apply text-primary align-middle static inline-block;
    transform: rotate(45deg);
    animation: catchRotate 1.2s infinite linear;
    font-size: 16px;

    &.large {
      font-size: 36px;
    }
  }
</style>
