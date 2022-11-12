<script setup lang="ts">
	import { RouterLink } from 'vue-router';
	import axios from 'axios';
	import { onMounted, ref, reactive, watch } from 'vue';

	type user = { email: string; password: string };

	const userLogIn = reactive<user>({ email: '', password: '' });
	const showPass = ref<boolean>(false);
	const passType = ref<string>('password');

	async function userLogInReq() {
		await alert(userLogIn.email + ' ' + userLogIn.password);

		try {
			const areYouLoggedIn = ref(
				await axios.post('https://reqres.in/api/login', {
					email: userLogIn.email,
					password: userLogIn.password,
				})
			);
			await alert('Success!!');
			await console.log(areYouLoggedIn.value);
		} catch (error) {
			console.log(error);
			alert('error occured');
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

	watch(showPass, () => {
		showPass.value == false
			? (passType.value = 'password')
			: (passType.value = 'text');
	});
</script>

<template>
	<div>Log In</div>
	<input type="text" v-model="userLogIn.email" placeholder="UserName" />
	<input :type="passType" v-model="userLogIn.password" placeholder="Password" />
	<button @click="userLogInReq">Log In!</button>
	<div>
		<span> <p>Don't have an acc?</p></span>
		<span><router-link to="/Register">Register</router-link></span>
	</div>

	<input type="checkbox" id="showPass" v-model="showPass" />
	<label for="showPass">Show Password</label>
</template>
