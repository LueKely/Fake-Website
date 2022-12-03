<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router';
	import { useFetchData } from '@/stores/fetchList';
	import { onMounted, ref } from 'vue';
	import { useLogInStore } from '@/stores/LogInStore';

	const logInStore = useLogInStore();
	const fetchPages = useFetchData();
	const pageNumberUrl = ref((number: number) => {
		return `/PageView/Page/${number}`;
	});
	const pageNumber = ref();

	onMounted(async () => {
		await logInStore.checkLogInStatus();
		await fetchPages.getData(1);
		pageNumber.value = await fetchPages.dataValue.data.total;
	});
</script>
<template>
	<!-- just so you know this is the main page for the pageview  -->
	<div class="w-[full] h-[80vh]">
		<router-view />
		<div
			class="w-[400px] h-[10vh] flex items-center justify-evenly mx-auto mt-auto transition-all ease-in-out"
		>
			<router-link
				class="pagination w-7 h-7 font-sans text-zinc-800 font-bold text-lg text-center rounded-full flex items-center justify-center"
				v-for="n in pageNumber"
				:key="n"
				:to="pageNumberUrl(n)"
			>
				{{ n }}</router-link
			>
		</div>
	</div>
</template>
<style scoped></style>
