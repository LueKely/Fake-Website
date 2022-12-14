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
		queryProp.value = await route.query.result?.toString();

		queryResults.value = await [];
		await searchingResults();
	});

	onMounted(async () => {
		await searchingResults();
	});
</script>
<template>
	<div class="h-[90vh] w-full p-6">
		<div class="h-[10vh] w-full flex flex-col items-center justify-center">
			<h1 class="font-sans font-bold text-4xl text-purple-500">
				Search:
				<span class="font-sans font-bold text-4xl text-neutral-800">{{
					route.query.result
				}}</span>
			</h1>
			<p class="text-neutral-500 font-light text-lg">
				Results are: {{ queryResults.length }}
			</p>
		</div>
		<div class="flex w-[80vw] m-auto items-start justify-start flex-wrap p-6">
			<PeopleInfo
				v-for="(item, index) in queryResults"
				:key="index"
				:fetched-person="item"
			></PeopleInfo>
		</div>
	</div>
</template>
