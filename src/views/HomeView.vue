<script setup lang="ts">
	import TheWelcome from '../components/TheWelcome.vue';
	import { people } from '@/stores/yow';

	const pepes = people();
	console.log(pepes.sayName);
</script>

<template>
	<main>
		<TheWelcome />
	</main>
</template>
