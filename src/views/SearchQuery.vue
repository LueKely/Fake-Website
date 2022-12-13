<script setup lang="ts">
	import { ref, onMounted, watch, computed } from 'vue';
	import { useRoute, useRouter } from 'vue-router';
	import { useFetchData } from '@/stores/fetchList';
	import type { PersonInfo } from '@/stores/types';
	import PeopleInfo from '@/components/PeopleInfo.vue';

	const route = useRoute();
	const router = useRouter();

	const currentQuery = computed(() => {
		return router.currentRoute.value.query.result;
	});
	const fetchStore = useFetchData();
	const queryResults = ref<PersonInfo[]>([]);

	const queryProp = ref<string | undefined>(route.query.result?.toString());

	async function searchingResults() {
		for (let index = 0; index < 2; index++) {
			await fetchStore.getData(index + 1);
			await fetchStore.fetchedId?.forEach((element) => {
				if (
					(element.first_name + ' ' + element.last_name).includes(
						queryProp.value || 'none'
					)
				) {
					queryResults.value.push(element);
				}
			});
		}
	}

	watch(currentQuery, async () => {
		queryProp.value = route.query.result?.toString();

		queryResults.value = await [];
		await searchingResults();
	});

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
