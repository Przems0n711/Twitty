<!-- App.svelte -->

<script>
    import { Router, Route } from 'svelte-router';
    import Login from 'src/pages/login/Login.js';
</script>

<Router>
    <Route path="/login" component={Login} />
</Router>