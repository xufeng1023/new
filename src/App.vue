<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
	@import "../node_modules/bulma/css/bulma.css";

	html,body,#app {
		height: 100%;
	}
	select.is-success {
	    border-color: #23d160;
	}
</style>