<script>
  import {Link} from "svelte-routing";
  import {locale} from '../i18n';
</script>

<div class="about">
  <Link to="/">
    <img class="about-logo" src="/logo.png" alt="CityCatch"/>
  </Link>

  {#if $locale === 'ru'}
    <p>
      <b>CityCatch</b> - это хорошо всем знакомая игра в "<a href="https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D0%B0_(%D0%B8%D0%B3%D1%80%D0%B0)" target="_blank">Города</a>",
      но с некоторыми отличиями.
    </p>
    <p>
      Теперь важно не только вовремя вспомнить город на нужную букву, но и постараться подобрать его так, чтобы он располагался как можно дальше от предыдущего.<br/>
      Чем больше километров разделяют города, тем больше очков получит игрок.
    </p>
    <p>
      Время также ограничено: кто не успел ответить за минуту, выбывает.
    </p>
    <p>
      Последний оставшийся игрок объявляется победителем и получает удвоенное количество очков за свои набранные километры.
    </p>
    <p>
      Каждая новая игра начинается против компьютерного соперника, а затем к ней могут присоединяться живые игроки (до 5 человек).
    </p>

    <div class="about-links">
      <Link to="/">К списку игр</Link>
    </div>
  {:else}
    <p>
      <b>CityCatch</b> is a variation of "<a href="https://en.wikipedia.org/wiki/Word_chain" target="_blank">Word chain</a>"
      game, but with some differences.
    </p>
    <p>
      Now it is important not only to come up in time with a city name for the desired letter, but also to try to choose it located as far as possible from the previous one.<br/>
      The more kilometers separates these cities, the more points the player will get.
    </p>
    <p>
      Time is also limited: those who haven't answer during a minute are eliminated.<br/>
      The last remaining player is declared the winner and gets twice the points for their gained kilometers.
    </p>
    <p>
      Each new game begins against a computer opponent, and then it can be joined by live players (up to 5 people).
    </p>

    <div class="about-links">
      <Link to="/">To games list</Link>
    </div>
  {/if}
</div>

<style>
  .about-logo {
    @apply m-auto mb-8;
  }

  .about {
    @apply m-auto max-w-2xl text-justify;

    :global(p) {
      @apply mb-4;
    }
  }

  .about-links {
    @apply mt-8 flex justify-center;
  }
</style>
