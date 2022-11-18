<script setup lang="ts">
	import router from '@/router';
	import { ref } from 'vue';
	const search = ref<string>('');

	function submitSearchQuery() {
		router.push({ path: '/Search', query: { result: search.value } });
	}
</script>

<template>
	<h1>This is the search</h1>
	<input type="text" v-model="search" placeholder="Search" />
	<button @click="submitSearchQuery">Submit</button>
</template>
