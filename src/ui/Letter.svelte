<script>
  import {locale} from '../i18n';
  import {translit} from '../utils/translit';

  export let letter;

  let realLetter;
  $: realLetter = $locale !== 'ru' ? translit(letter) : letter;
</script>

<span class="letter">
  {realLetter}
</span>

<style>
  .letter {
    @apply inline-block h-8 w-8 text-center rounded-full bg-gray-400 leading-loose font-bold shadow;
    max-width: initial;
  }
</style>
