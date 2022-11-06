<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router';
	import { useFetchData } from '@/stores/fetchList';
	import { onMounted, ref, computed } from 'vue';
	const fetchPages = useFetchData();
	const pageNumberUrl = ref((number: number) => {
		return `/PageView/Page/${number}`;
	});
	const pageNumber = ref();

	onMounted(async () => {
		await fetchPages.getData(1);
		await console.log(fetchPages.dataValue.data.total);
		pageNumber.value = await fetchPages.dataValue.data.total;
	});
</script>
<template>
	<h1>View Page tite</h1>
	<p>page tite has the value {{ fetchPages.dataValue }}</p>
	<p>this is {{ pageNumber }}</p>
	<router-view />

	<router-link v-for="n in pageNumber" :key="n" :to="pageNumberUrl(n)">
		{{ n }}&nbsp;</router-link
	>
</template>
<style scoped>
	.router-link-active {
		color: red;
	}
</style>
