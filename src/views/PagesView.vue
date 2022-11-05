<script setup lang="ts">
	import axios from 'axios';

	import { onMounted } from 'vue';

	const prop = defineProps<{ id: string }>();

	async function getData(id: number) {
		const lue = await axios.get(`https://reqres.in/api/users?page=${id}`);
		alert(`https://reqres.in/api/users?page=${id}`);
		console.log(lue);
	}

	onMounted(() => {
		getData(parseInt(prop.id));
	});
</script>
<template>
	<div>This is pageeeeeees {{ prop.id }}</div>
</template>
