<script setup lang="ts">
	import axios from 'axios';
	import { useRoute } from 'vue-router';
	import { onMounted } from 'vue';

	const route = useRoute();

	async function getData(id: string) {
		const lue = await axios.get(`https://reqres.in/api/users?page=${id}`);
		alert(`https://reqres.in/api/users?page=${id}`);
		console.log(lue);
	}

	onMounted(() => {
		getData(`${route.params.id}`);
	});
</script>
<template>
	<div>This is pageeeeeees {{ route.params.id }}</div>
</template>
