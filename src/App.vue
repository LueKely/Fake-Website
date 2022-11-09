<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router';
	import { useCounterStore } from '@/stores/counter';
	import { people } from '@/stores/yow';

	const count = useCounterStore();
	const test = people();

	console.log(test.sayHiName);

	console.log(count.count);
</script>

<template>
	<nav>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/about">About</RouterLink>
		<RouterLink to="/PageView/Page/1">View Page</RouterLink>
		<RouterLink to="/LogIn">logIn</RouterLink>
	</nav>
	<RouterView />
</template>

<style scoped></style>
