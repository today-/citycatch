<script>
  import {Router} from 'svelte-routing';
  import Route from './Route.svelte';
  import Games from '../games/Games.svelte';
  import About from '../common/About.svelte';
  import Stats from '../stats/Stats.svelte';
  import Profile from '../profile/Profile.svelte';
  import Layout from '../layout/Layout.svelte';
  import Page404 from '../common/Page404.svelte';
  import FullGamePage from '../game/FullGamePage.svelte';
</script>

<Router url="">
  <Layout>
    <Route path="/" component={Games} title={'games-page'}/>
    <Route path="/game/:id" component={FullGamePage}/>

    <Route path="/profile" component={Profile} title={'profile-page'}/>
    <Route path="/about" component={About} title={'about-page'}/>
    <Route path="/stats" component={Stats} title={'stats-page'}/>

    <Route component={Page404} title={'404-page'}/>
  </Layout>
</Router>
