<script setup lang="ts">
	import { ref } from 'vue';
	import type { PersonInfo } from '@/stores/types';
	import UpdatePerson from './UpdatePerson.vue';
	import DeletePerson from './DeletePerson.vue';
	const modalStatus = ref(false);
	const delModalStatus = ref(false);

	function showModal() {
		modalStatus.value = true;
	}
	function showModalDel() {
		delModalStatus.value = true;
	}
	function hideModal(e: boolean) {
		modalStatus.value = e;
	}
	function hideModalDel(e: boolean) {
		delModalStatus.value = e;
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
	<button @click="showModalDel">Delete</button>

	<div v-if="modalStatus == true">
		<UpdatePerson
			:user="props.fetchedPerson"
			@close-update="hideModal"
		></UpdatePerson>
	</div>

	<div v-if="delModalStatus == true">
		<DeletePerson
			:id="props.fetchedPerson.id"
			@delete-modal="hideModalDel"
		></DeletePerson>
	</div>
</template>
<style></style>
