<script setup lang="ts">
	import { onMounted, ref } from 'vue';
	import type { PersonInfo } from '@/stores/types';
	import PersonalDetail from './PersonalDetail.vue';
	const props = defineProps<{ fetchedPerson: PersonInfo }>();
	const details = ref<boolean>(false);

	function showDetails() {
		details.value = true;
	}

	function hideDetails() {
		details.value = false;
	}
	onMounted(async () => {});
</script>

<template>
	<h1>This is the {{ props.fetchedPerson }} info</h1>
	<h1>
		Name: {{ props.fetchedPerson.first_name }} &nbsp;{{
			props.fetchedPerson.last_name
		}}
	</h1>
	<button @click="showDetails">More Details</button>
	<div v-if="details == true">
		<PersonalDetail :fetched-person="props.fetchedPerson"></PersonalDetail>
		<button @click="hideDetails">Hide Details</button>
	</div>
</template>

<style scoped></style>
