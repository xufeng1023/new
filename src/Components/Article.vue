<template>
	<router-link tag="article" to="/chat" class="message" @click="onFeedClick" :class="{'is-warning':isWarning}">
	  	<div class="message-body">
	    Lorem ipsum dolor sit amet, consectetur adipiscing elit. tempus quis placerat ut, porta nec nulla. 
	  	</div>
	</router-link>
</template>

<script>
	export default {
		data() {
			return {
				isWarning: false
			}
		},
		methods: {
			onFeedClick() {
				this.isWarning = true
			}
		}
	}
</script>

<style>
	article {
		margin-bottom: 0;
	}
</style>