<script setup lang="ts">
	import axios from 'axios';
	import { reactive } from 'vue';
	type user = {
		firstName: string;
		lastName: string;
		email: string;
		avatar: string;
	};
	const newUser = reactive<user>({
		firstName: '',
		lastName: '',
		email: '',
		avatar: '',
	});

	async function createNewUser() {
		try {
			axios.post('https://reqres.in/api/users', { ...newUser });
			alert('User added');
			clearInput();
		} catch (error) {
			alert('whoops error occured');
		}
	}

	function clearInput() {
		for (const key in newUser) {
			newUser[key as keyof typeof newUser] = '';
		}
	}
</script>
<template>
	<div>
		<h1>Create User</h1>
		<div>
			<input type="text" v-model="newUser.firstName" placeholder="first name" />
			<input type="text" v-model="newUser.lastName" placeholder="last name" />
			<input type="text" v-model="newUser.email" placeholder="email" />
			<input type="text" v-model="newUser.avatar" placeholder="Avatar URL" />
		</div>
		<button @click="createNewUser">Submit</button>
		<button @click="clearInput">Clear</button>
	</div>
</template>
