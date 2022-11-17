<script setup lang="ts">
	import { useRoute } from 'vue-router';
	const route = useRoute();
</script>
<template>
	<h1>Search:{{ route.query.result }}</h1>
</template>
