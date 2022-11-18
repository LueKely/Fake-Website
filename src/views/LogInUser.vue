<script setup lang="ts">
	import { RouterLink } from 'vue-router';
	import axios from 'axios';
	import { ref, reactive, watch } from 'vue';
	import { useLogInStore } from '@/stores/LogInStore';
	import LogOut from '@/components/LogOut.vue';
	import router from '@/router';
	import { useQueryStore } from '@/stores/QueryStore';
	import { storeToRefs } from 'pinia';
	type user = { email: string; password: string };

	// const route = useRoute();
	const queryStore = useQueryStore();
	const { currentRouteQuery } = storeToRefs(queryStore);
	const routeName = ref(currentRouteQuery);

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
			await router.push({
				path: routeName.value,
			});
		} catch (error) {
			console.log(error);
			alert('error occured');
		}
	}

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
	<p>tite {{ currentRouteQuery }}</p>
</template>
