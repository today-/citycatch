<script>
  import {onDestroy, onMount} from 'svelte';
  import StatItem from '../stats/StatItem.svelte';
  import {toCountdown} from '../utils/date';

  export let value; // unix ts

  const REFRESH_INTERVAL = 1000 / 30;

  let countdownId;
  let formattedValue;

  function startTimer() {
    countdownId = window.setInterval(() => formatValue(), REFRESH_INTERVAL);
  }

  function stopTimer() {
    if (countdownId) {
      clearInterval(countdownId);
      countdownId = undefined;
    }
  }

  function formatValue() {
    formattedValue = toCountdown(Math.max(value - Date.now(), 0));
  }

  onMount(() => {
    formatValue();
    if (value >= Date.now()) {
      startTimer();
    }
  });

  onDestroy(() => stopTimer());
</script>

<StatItem value={formattedValue}/>
