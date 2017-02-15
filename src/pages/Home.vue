<template>
	<div id="home" class="container">
		<div class="columns">
	  		<div class="column is-half is-offset-one-quarter">
				<p class="control">
				  <input class="input is-success" type="text" placeholder="Nickname">
				</p>
				<p class="control">
				  <span class="select is-fullwidth">
				    <select class="is-success is-fullwidth">
				      <option>Select dropdown</option>
				      <option>With options</option>
				    </select>
				  </span>
				</p>
				<p class="control">
					<router-link to="/feeds" tag="button" class="button is-primary is-fullwidth">Start</router-link>
				</p>
	  		</div>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style>
	#home {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>