<script setup lang="ts">
	import { inject, ref, onMounted } from 'vue';
	import type { PersonInfo } from '@/stores/types';
	const injected = ref();
	onMounted(async () => {
		injected.value = await inject<[PersonInfo]>('peopleData');
	});
</script>
<template>
	<h1>This Personal Detail</h1>
	<p>{{ injected }}</p>
</template>
<style></style>
