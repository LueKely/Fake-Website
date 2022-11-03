<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router';
	import HelloWorld from './components/HelloWorld.vue';
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
	</nav>
	<RouterView />
</template>

<style scoped></style>
