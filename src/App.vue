<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
	export default {

	}
</script>

<style>
	@import "../node_modules/bulma/css/bulma.css";

	html {
		height: 100%;
		background: yellow;
	}
	body {
		height: 95vh;
		margin-top: 5vh;
		background: red;
	}
	#app {
		height: 100%;
	}
	.hero.is-fullheight {
		min-height: 100%;
	}
	.rounded-border {
		border-radius: 10rem;
	}
	select.is-success {
	    border-color: #23d160;
	}
</style>