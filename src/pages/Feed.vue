<template>
	<div class="container">
		<p class="control">
	  		<input class="input is-success rounded-border" type="text" placeholder="search subjects">
		</p>
		<div id="content">
			<Box></Box>
			<Box></Box>
			<Box></Box>
			<Box></Box>
			<Box></Box>
			<Box></Box>
		</div>
		<div id="menu" class="tabs is-centered">
	  		<ul>
		    	<li class="is-active"><a>Pictures</a></li>
		    	<li><a>Music</a></li>
		    	<li><a>Videos</a></li>
		    	<router-link to="/" tag="li"><a>Logout</a></router-link>
		  	</ul>
		</div>
	</div>
</template>

<script>
	import Article from '../components/Article.vue'

	export default {
		components: {
			Box: Article
		}
	}
</script>

<style>
	.container {
		height: 100%;
		display: flex;
    	justify-content: space-between;
    	height: 100%;
    	flex-direction: column;
	}
	#content {
		max-height: 87%;
		overflow-y: scroll; 
	}
	.message-body {
		border-radius: 0;
	}
	#menu {
		z-index: 999;
	}
</style>