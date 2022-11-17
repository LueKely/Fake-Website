<script setup lang="ts">
	import { RouterLink } from 'vue-router';
	import axios from 'axios';
	import { onMounted, ref, reactive, watch, computed } from 'vue';
	import { useLogInStore } from '@/stores/LogInStore';
	import LogOut from '@/components/LogOut.vue';
	import router from '@/router';

	type user = { email: string; password: string };

	const logInStore = useLogInStore();

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

			await sessionStorage.setItem('name', 'User');
			logInStore.checkLogInStatus();
			await alert('Success!!');
			await console.log(areYouLoggedIn.value);
			await router.push({ name: 'home' });
		} catch (error) {
			console.log(error);
			alert('error occured');
		}
	}
	// slander
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

	<div v-if="logInStore.logInStatus == true"><LogOut></LogOut></div>
</template>
