<script setup lang="ts">
	import axios from 'axios';
	import { onMounted, ref } from 'vue';
	async function getSlander() {
		const lue = ref(
			await axios.get('https://sample-mern-backend.vercel.app/api/todos')
		);
		await console.log(lue.value);
	}

	onMounted(async () => {
		getSlander();
	});
</script>

<template>
	<div>Log In</div>
	<input type="text" placeholder="UserName" />
	<input type="password" placeholder="Password" />
	<button>Log In!</button>
</template>
