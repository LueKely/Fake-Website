<script setup lang="ts">
	import axios from 'axios';
	import type { PersonInfo } from '@/stores/types';
	import { reactive, watch } from 'vue';
	const props = defineProps<{ user: PersonInfo }>();

	let copy = reactive<PersonInfo>({ ...props.user });
	let emit = defineEmits<{ (e: 'closeUpdate', status: boolean): void }>();

	function hideModal() {
		emit('closeUpdate', false);
	}

	async function updateUser() {
		try {
			await axios.patch('https://reqres.in/api/users/', { ...copy });
			await alert('updated!');
		} catch (error) {
			alert('alert check joe');
			console.log(error);
		}
	}

	watch(props, () => {
		copy = { ...props.user };
	});
</script>
<template>
	<div>Update</div>

	<input type="text" v-model="copy.first_name" placeholder="First Name" />
	<input type="text" v-model="copy.last_name" placeholder="Last Name" />
	<input type="text" v-model="copy.email" placeholder="Email" />
	<input type="text" v-model="copy.avatar" placeholder="Profile Url" />
	<input type="text" v-model="copy.id" placeholder="ID" />

	<div>
		<button @click="updateUser">Send</button>
		<button @click="hideModal">Cancel</button>
	</div>
</template>
