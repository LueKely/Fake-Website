<script setup lang="ts">
	import { RouterLink } from 'vue-router';
</script>

<template>
	<h1>register nigger</h1>
	<input type="text" placeholder="Insert username" />
	<input type="text" placeholder="Insert user Email" />
	<input type="password" placeholder="Insert password" />
	<input type="password" placeholder="confirm password" />
	<button>Register!!</button>
	<div>
		<p>Already have a password?</p>
		<router-link to="/Login">Log in</router-link>
	</div>
</template>
