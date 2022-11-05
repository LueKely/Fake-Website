<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router';
	import axios from 'axios';
	import { ref } from 'vue';
	async function getData(id: number) {
		const lue = await axios.get(`https://reqres.in/api/users?page=${id}`);
		alert(`https://reqres.in/api/users?page=${id}`);
		console.log(lue);
	}
</script>
<template>
	<h1>View Page tite</h1>

	<router-view />
	<Router-Link to=""></Router-Link>
</template>
