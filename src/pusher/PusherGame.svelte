<script>
  import {onMount, onDestroy} from 'svelte';
  import {pusher} from "../utils/pusher";
  import {currentGameItemAdded} from "../stores/items";
  import {currentGameFinished, currentGameUpdated} from "../stores/game.on";

  export let name;
  let channel;

  onMount(() => {
    channel = pusher.subscribe(name);

    channel.bind('item.added', currentGameItemAdded);
    channel.bind('game.updated', currentGameUpdated);
    channel.bind('game.finished', currentGameFinished);
  });

  onDestroy(() => {
    pusher.unsubscribe(name)
  })
</script>
