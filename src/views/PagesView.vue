<script setup lang="ts">
	import PeopleInfo from '@/components/PeopleInfo.vue';
	import { useFetchData } from '@/stores/fetchList';
	import { onMounted, ref, watch } from 'vue';
	import type { PersonInfo } from '@/stores/types';

	const prop = defineProps<{ id: string }>();
	const fetchPages = useFetchData();

	// people ID
	const fetchPeople = ref<PersonInfo[]>();
	// const fetchPerson = ref<PersonInfo>();
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
	<!-- <div>Your are in Page {{ prop.id }}</div> -->
	<div v-if="fetchPages.fetchedId?.length == 0">
		<div class="w-full h-[80vh]">Looks like it is empty</div>
	</div>
	<div v-else-if="fetchPages.fetchedId?.length != 0">
		<div class="w-full">
			<div class="flex w-[69%] m-auto items-start justify-start flex-wrap p-6">
				<PeopleInfo
					v-for="(item, index) in fetchPeople"
					:key="index"
					:fetched-person="item"
				></PeopleInfo>
			</div>
		</div>
	</div>
</template>
