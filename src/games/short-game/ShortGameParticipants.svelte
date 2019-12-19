<script>
  import ParticipantAvatar from "../../common/ParticipantAvatar.svelte";

  /** @type IParticipant[] */
  export let participants = [];
  export let order;
</script>

<div class="short-game-participants">
  {#each participants as p (p.id)}
    <ParticipantAvatar
      user={p.user}
      current={p.order === order}
      muted={p.order < 0}
    />
  {/each}
</div>

<style>
  .short-game-participants {
    @apply pt-2;
  }
</style>
