<script setup lang="ts">
	import axios from 'axios';
	import { reactive, ref } from 'vue';
	import { RouterLink } from 'vue-router';

	type registerUser = {
		userName: string;
		userEmail: string;
		userPassword: string;
	};

	const newUser = reactive<registerUser>({
		userName: '',
		userEmail: '',
		userPassword: '',
	});

	async function registerNewUser() {
		try {
			const createPostReq = ref(
				await axios.post('https://reqres.in/api/register', {
					email: newUser.userEmail,
					password: newUser.userPassword,
				})
			);
			console.log(createPostReq.value);

			await alert('success!!');
		} catch (error) {
			alert('error');
		}
	}
</script>

<template>
	<h1>register nigger</h1>
	<input type="text" v-model="newUser.userName" placeholder="Insert username" />
	<input
		type="text"
		v-model="newUser.userEmail"
		placeholder="Insert user Email"
	/>
	<input
		type="password"
		v-model="newUser.userPassword"
		placeholder="Insert password"
	/>
	<input type="password" placeholder="confirm password" />
	<button @click="registerNewUser">Register!!</button>
	<div>
		<p>Already have a password?</p>
		<router-link to="/Login">Log in</router-link>
	</div>
</template>
