<script setup lang="ts">
	import { RouterLink } from 'vue-router';
	import axios from 'axios';
	import { onMounted, ref, reactive } from 'vue';

	type user = { email: string; password: string };

	const userLogIn = reactive<user>({ email: '', password: '' });

	async function userLogInReq() {
		try {
			const areYouLoggedIn = ref(
				await axios.post('https://reqres.in/api/login', {
					email: 'eve.holt@reqres.in',
					password: 'cityslicka',
				})
			);
			await console.log(areYouLoggedIn.value);
		} catch (error) {
			console.log(error);
		}
	}
	async function getSlander() {
		const lue = ref(
			await axios.get('https://sample-mern-backend.vercel.app/api/todos')
		);
		await console.log(lue.value);
	}

	onMounted(async () => {
		getSlander();
	});
</script>

<template>
	<div>Log In</div>
	<input type="text" v-model="userLogIn.email" placeholder="UserName" />
	<input type="password" v-model="userLogIn.password" placeholder="Password" />
	<button @click="userLogInReq">Log In!</button>
	<div>
		<span> <p>Don't have an acc?</p></span>
		<span><router-link to="/Register">Register</router-link></span>
	</div>
</template>
