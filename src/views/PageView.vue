<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router';
	import { useFetchData } from '@/stores/fetchList';
	import { onMounted, ref } from 'vue';
	import { useLogInStore } from '@/stores/LogInStore';
	import SearchComponent from '@/components/SearchComponent.vue';
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
	<h1>View Page tite</h1>

	<div v-if="logInStore.logInStatus == true"><router-view /></div>
	<div v-else>
		<p>Please log in here &nbsp;</p>
		<router-link to="/LogIn">Login</router-link>
	</div>
	<router-link v-for="n in pageNumber" :key="n" :to="pageNumberUrl(n)">
		{{ n }}&nbsp;</router-link
	>
	<SearchComponent></SearchComponent>
</template>
<style scoped>
	.router-link-active {
		color: red;
	}
</style>
