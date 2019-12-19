<script>
  import ParticipantAvatar from "../common/ParticipantAvatar.svelte";
  import {formatDistance} from "../utils/format";
  import StatItem from "./StatItem.svelte";
  import {_} from '../i18n';

  /** @type ITopUser[]*/
  export let top;
</script>

{#each top as {name, pic, distance, winsCount, winsPercent, gamesCount}, i}
  <div class="top-row">
    <div class="top-col">
      <span class="place">{i+1}</span>
      <ParticipantAvatar
        user={{name, pic}}
    /> {name}
    </div>

    {#if distance}
      <div class="top-col">
        <StatItem
          value={formatDistance(distance)}
        />
      </div>
    {/if}

    {#if winsCount}
      <div class="top-col">
        <StatItem
          value={winsCount}
          suffix="{$_('stats-count-wins', winsCount)} ({winsPercent}%)"
        />
      </div>
    {/if}

    {#if gamesCount && !winsCount}
      <div class="top-col">
        <StatItem
          value={gamesCount}
          suffix={$_('stats-count-games', gamesCount)}
        />
      </div>
    {/if}
  </div>
{/each}

<style>
  .top-row {
    @apply flex items-center justify-between py-2;

    & + & {
      @apply border-t border-dashed;
    }

    &:first-of-type {
      @apply pt-0;
    }

    &:last-of-type {
      @apply pb-0;
    }

    .place {
      @apply shadow rounded-full text-sm px-1 align-middle;
    }
  }
</style>
