<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router';
	import { useCounterStore } from '@/stores/counter';
	import { people } from '@/stores/yow';
	import GoBack from './components/GoBack.vue';

	const count = useCounterStore();
	const test = people();

	console.log(test.sayHiName);

	console.log(count.count);
</script>

<template>
	<div
		class="w-full h-24 p-4 bg-neutral-100 border-b-4 border-violet-500 flex items-center"
	>
		<nav class="font-bold text-lg flex">
			<RouterLink class="text-violet-500 font-bold text-xl" to="/"
				>FAKE WEBSITE &nbsp;</RouterLink
			>
			<RouterLink to="/">Home &nbsp;</RouterLink>
			<RouterLink to="/about">About &nbsp;</RouterLink>
			<RouterLink to="/PageView/Page/1">View Page &nbsp;</RouterLink>
			<RouterLink to="/LogIn">Log in &nbsp;</RouterLink>
			<RouterLink to="/Register">Register &nbsp;</RouterLink>
			<RouterLink to="/Create">Create User &nbsp;</RouterLink>
		</nav>
	</div>

	<router-view></router-view>
	<GoBack></GoBack>
</template>

<style scoped></style>
