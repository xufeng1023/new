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
	html {
		height: 100%;
		overflow: auto;
	}
	body {
		height: 97vh;
		margin-top: 3vh;
	}
	#app {
		height: 100%;
	}
	.hero.is-fullheight {
		min-height: 100%;
	}
	.hero-head,.hero-foot {
		padding: 0 1.5rem;
	}
	.hero-foot {
		padding: 0.5rem 1.5rem;
	}
	.rounded-border {
		border-radius: 10rem;
	}
	select.is-success {
	    border-color: #23d160;
	}
</style>