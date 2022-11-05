<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router';
	import { useFetchData } from '@/stores/fetchList';
	import { onMounted, ref } from 'vue';
	const fetchPages = useFetchData();

	onMounted(async () => {
		await fetchPages.getData(1).then(() => {
			console.log(fetchPages.dataValue.data);
		});
	});
</script>
<template>
	<h1>View Page tite</h1>
	<p>page tite has the value {{ fetchPages.dataValue }}</p>
	<router-view />
</template>
