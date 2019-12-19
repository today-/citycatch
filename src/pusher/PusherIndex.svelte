<script>
  import {onMount, onDestroy} from 'svelte';
  import {pusher} from "../utils/pusher";
  import {gameCreated, gameFinished, gameUpdated} from "../stores/games.on";
  import {itemAdded} from "../stores/items";

  export let name = 'index';
  let channel;

  onMount(() => {
    channel = pusher.subscribe(name);

    channel.bind('game.created', gameCreated);
    channel.bind('game.updated', gameUpdated);
    channel.bind('game.finished', gameFinished);
    channel.bind('item.added', itemAdded);
  });

  onDestroy(() => {
    pusher.unsubscribe(name)
  })
</script>
