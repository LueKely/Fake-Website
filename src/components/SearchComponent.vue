<script setup lang="ts">
	import router from '@/router';
	import { ref } from 'vue';
	const search = ref<string>('');

	function submitSearchQuery() {
		router.push({ path: '/Search', query: { result: search.value } });
	}
</script>

<template>
	<div class="flex w-[15vw] bg-slate-500">
		<input type="text" v-model="search" placeholder="Search" />
		<button @click="submitSearchQuery">Submit</button>
	</div>
</template>
