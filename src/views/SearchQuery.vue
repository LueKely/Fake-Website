<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import { useRoute } from 'vue-router';
	import { useFetchData } from '@/stores/fetchList';
	import type { PersonInfo } from '@/stores/types';
	import PeopleInfo from '@/components/PeopleInfo.vue';

	const route = useRoute();

	const fetchStore = useFetchData();
	const queryResults = ref<PersonInfo[]>([]);

	const queryProp = ref<string | undefined>(route.query.result?.toString());

	async function searchingResults() {
		for (let index = 0; index < 2; index++) {
			await console.log(`Page:${index} started`);

			await fetchStore.getData(index + 1);
			await fetchStore.fetchedId?.forEach((element) => {
				if (element.first_name.includes(queryProp.value || 'none')) {
					queryResults.value.push(element);
				}
			});
		}
		await console.log(queryResults.value);
	}
	onMounted(async () => {
		await searchingResults();
	});
</script>
<template>
	<h1>Search:{{ route.query.result }}</h1>
	<p>Results are:{{ queryResults.length }}</p>

	<PeopleInfo
		v-for="(item, index) in queryResults"
		:key="index"
		:fetched-person="item"
	></PeopleInfo>
</template>
