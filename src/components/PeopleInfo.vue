<script setup lang="ts">
	import { onMounted } from 'vue';
	import type { PersonInfo } from '@/stores/types';
	import PersonalDetail from './PersonalDetail.vue';
	const props = defineProps<{ fetchedPerson: PersonInfo }>();

	onMounted(async () => {});
</script>

<template>
	<h1>This is the {{ props.fetchedPerson }} info</h1>
	<h1>
		Name: {{ props.fetchedPerson.first_name }} &nbsp;{{
			props.fetchedPerson.last_name
		}}
	</h1>
	<button click="">More Details</button>
	<div>
		<PersonalDetail :fetched-person="props.fetchedPerson"></PersonalDetail>
	</div>
</template>

<style scoped></style>
