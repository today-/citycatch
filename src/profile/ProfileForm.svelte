<script>
  import {form, } from 'svelte-forms';
  import Input from '../ui/Input.svelte';
  import Button from '../ui/Button.svelte';
  import {postProfile, profileUpdating} from '../stores/user';
  import {validateEmail} from '../utils/validate';
  import Alert from '../ui/Alert.svelte';
  import Icon from '../icon/Icon.svelte';
  import User from '../icon/user.svg';
  import Mail from '../icon/mail.svg';
  import {_} from '../i18n';

  export let user;
  let name = user && user.name || '';
  let email = user && user.email || '';

  const profileForm = form(() => ({
    name: {value: name, validators: ['required', 'max:50']},
    email: {value: email, validators: [validateEmail]}
  }));

  const handleSubmit = () => postProfile({name, email});

  let isDisabled;
  $: isDisabled = !$profileForm.valid || !$profileForm.dirty || $profileUpdating.loading;
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="row">
    <label for="name">{$_('name')}:</label>
    <Input
      name="name"
      required
      autofocus
      bind:value={name}
      placeholder={$_('name')}
    >
      <div slot="prefix"><Icon icon={User}/></div>
    </Input>
  </div>

  <div class="row">
    <label for="email">{$_('email')}:</label>
    <Input
      name="email"
      bind:value={email}
      placeholder={$_('email')}
    >
      <div slot="prefix"><Icon icon={Mail}/></div>
    </Input>
  </div>

  {#if $profileUpdating.error}
    <div class="row">
      <Alert>{$profileUpdating.error}</Alert>
    </div>
  {/if}

  <Button type="submit" disabled={isDisabled}>
    {$_('profile-button')}
  </Button>
</form>

<style>
  .row {
    @apply mb-8;
  }
</style>
