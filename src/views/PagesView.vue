<script setup lang="ts">
	import PeopleInfo from '@/components/PeopleInfo.vue';
	import { useFetchData } from '@/stores/fetchList';
	import { onMounted, ref, watch, computed } from 'vue';
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

	const isEmpty = computed(() => {
		return fetchPages.fetchedId?.length == 0;
	});

	watch(prop, () => {
		getAll();
	});

	onMounted(() => {
		getAll();
	});
</script>
<template>
	<div class="bg-neutral-100 w-screen h-full">
		<div v-if="isEmpty">
			<div class="w-full h-[90vh] flex items-center justify-center">
				<h1 class="font-sans font-bold text-neutral-800 text-4xl">
					Uh oh... Looks like it's empty 💀
				</h1>
			</div>
		</div>
		<div v-else-if="!isEmpty">
			<div class="w-full">
				<div
					class="flex w-[69%] m-auto items-start justify-start flex-wrap p-6"
				>
					<PeopleInfo
						v-for="(item, index) in fetchPeople"
						:key="index"
						:fetched-person="item"
					></PeopleInfo>
				</div>
			</div>
		</div>
	</div>
</template>
