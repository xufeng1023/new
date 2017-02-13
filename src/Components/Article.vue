<template>
	<article class="message" @click="isWarning=true" :class="{'is-warning':isWarning}">
	  	<div class="message-body">
	    Lorem ipsum dolor sit amet, consectetur adipiscing elit. tempus quis placerat ut, porta nec nulla. 
	  	</div>
	</article>
</template>

<script>
	export default {
		data() {
			return {
				isWarning: false
			}
		}
	}
</script>