<script>
  import {Route} from "svelte-routing";
  import RouteTitle from "./RouteTitle.svelte";

  const {title, component, ...rest} = $$props;
</script>

<Route {...rest} let:params>
  <RouteTitle title={title}/>
  <svelte:component this={component} {...params}/>
</Route>
