<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import type { PersonInfo } from '@/stores/types';

	const props = defineProps<{ fetchedPerson: PersonInfo }>();
</script>
<template>
	<h1>DETAILS</h1>
	<p>PROFILE:{{ props.fetchedPerson.avatar }}</p>
	<p>
		Full name: {{ props.fetchedPerson.first_name }}
		{{ props.fetchedPerson.last_name }}
	</p>

	<p>Email: {{ props.fetchedPerson.email }}</p>
	<p>ID:{{ props.fetchedPerson.id }}</p>
</template>
<style></style>
