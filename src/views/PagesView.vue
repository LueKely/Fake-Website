<script setup lang="ts">
	import { useFetchData } from '@/stores/fetchList';
	import { onMounted, ref, watch } from 'vue';

	const prop = defineProps<{ id: string }>();
	const fetchPages = useFetchData();
	const fetchPeople = ref<[object]>();

	async function getAll() {
		await fetchPages.getData(+prop.id);
		await console.log(fetchPages.fetchedId);
		fetchPeople.value = await fetchPages.fetchedId;
	}

	watch(prop, () => {
		getAll();
	});

	onMounted(() => {
		getAll();
	});
</script>
<template>
	<div>This is pageeeeeees {{ prop.id }}</div>
	<div>{{ fetchPeople }}</div>
</template>
