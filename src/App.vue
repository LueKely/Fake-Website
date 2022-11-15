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
	<nav>
		<RouterLink to="/">Home &nbsp;</RouterLink>
		<RouterLink to="/about">About &nbsp;</RouterLink>
		<RouterLink to="/PageView/Page/1">View Page &nbsp;</RouterLink>
		<RouterLink to="/LogIn">Log in &nbsp;</RouterLink>
		<RouterLink to="/Register">Register &nbsp;</RouterLink>
		<RouterLink to="/Create">Create User &nbsp;</RouterLink>
	</nav>
	<RouterView />
	<GoBack></GoBack>
</template>

<style scoped></style>
