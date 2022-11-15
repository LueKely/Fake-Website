<script setup lang="ts">
	import axios from 'axios';

	const props = defineProps<{ id: number }>();
	const emit = defineEmits<{ (e: 'deleteModal', status: boolean): void }>();

	function hideDeleteModal() {
		emit('deleteModal', true);
	}

	async function deleteUser(prop: number) {
		try {
			axios.delete(`https://reqres.in/api/users/${prop}`);
			alert('user deleted');
		} catch (error) {
			alert('error occured');
			console.log(error);
		}
	}
</script>
<template>
	<div>
		<h1>You are about to delete this user {{ props.id }}, are you sure?</h1>
		<button @click="deleteUser(props.id)">Delete</button>
		<button @click="hideDeleteModal">Cancel</button>
	</div>
</template>
