<script setup lang="ts">
	import { onMounted } from 'vue';
	import type { PersonInfo } from '@/stores/types';
	import PersonalDetail from './icons/PersonalDetail.vue';
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
	<div>
		<PersonalDetail></PersonalDetail>
	</div>
</template>

<style scoped></style>
