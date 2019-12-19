<script>
  import {Link} from "svelte-routing";
  import Icon from "../icon/Icon.svelte";
  import UserName from "./UserName.svelte";
  import SubMenu from "./SubMenu.svelte";
  import MultiFlag from "../common/MultiFlag.svelte";
  import User from '../icon/user.svg';
  import LineChart from '../icon/line-chart.svg';
  import InfoCircle from "../icon/info-circle.svg";
  import {_, toggleLanguage} from "../i18n";
</script>

<div class="navbar">
  <nav class="navbar-nav container">
    <div class="navbar-item">
      <Link to="/">
        <img src="/logo.png" alt="CityCatch" class="navbar-logo"/>
      </Link>
    </div>
    <div class="navbar-item">
      <SubMenu>
        <div slot="opener">
          <UserName/>
        </div>

        <Link to="/profile">
          <Icon icon={User}/>
          {$_('profile-page')}
        </Link>

        <Link to="/stats">
          <Icon icon={LineChart}/>
          {$_('stats-page')}
        </Link>

        <Link to="/about">
          <Icon icon={InfoCircle}/>
          {$_('about-page')}
        </Link>

        <a href='/' on:click|preventDefault={toggleLanguage}>
          <MultiFlag/>
          {$_('toggle-language-button')}
        </a>
      </SubMenu>
    </div>
  </nav>
</div>

<style>
  .navbar {
    @apply fixed w-full top-0 bg-white shadow z-40;
  }

  .navbar-nav {
    @apply relative flex flex-wrap items-center justify-between;
  }

  .navbar-logo {
    @apply block h-8 w-auto my-2;
  }

  .navbar-item {
    @apply border-b-2 border-transparent transition-border;

    &:hover {
      @apply border-primary;
    }
  }
</style>
