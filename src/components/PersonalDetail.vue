<script setup lang="ts">
	import { ref } from 'vue';
	import type { PersonInfo } from '@/stores/types';
	import UpdatePerson from './UpdatePerson.vue';
	const modalStatus = ref(false);

	function showModal() {
		modalStatus.value = true;
	}
	function hideModal(e: boolean) {
		modalStatus.value = e;
	}

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
	<button @click="showModal">Update</button>
	<div v-if="modalStatus == true">
		<UpdatePerson
			:user="props.fetchedPerson"
			@close-update="hideModal"
		></UpdatePerson>
	</div>
</template>
<style></style>
