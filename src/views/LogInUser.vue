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

	// route
	const queryStore = useQueryStore();
	const { currentRouteQuery } = storeToRefs(queryStore);
	const routeName = ref(currentRouteQuery);

	// Login details
	const logInStore = useLogInStore();
	const userLogIn = reactive<user>({ email: '', password: '' });
	const showPass = ref<boolean>(false);
	const passType = ref<string>('password');

	// sending request
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
	<div class="w-screen h-[90vh] bg-slate-300 bg-repeat bg-contain flex">
		<!-- log in -->
		<div class="w-[35%] h-full bg-neutral-100 flex items-center justify-center">
			<div class="w-[60%] h-[60%] shadow-lg flex flex-col">
				<div class=""><h1>Log In</h1></div>
				<div><h1>Username</h1></div>
				<input type="text" v-model="userLogIn.email" placeholder="UserName" />
				<div><h1>Password</h1></div>
				<input
					:type="passType"
					v-model="userLogIn.password"
					placeholder="Password"
				/>
				<div>
					<label for="showPass">Show Password</label>
					<input type="checkbox" id="showPass" v-model="showPass" />
				</div>

				<button @click="userLogInReq">Log In!</button>
				<div>
					<span> <p>Don't have an acc?</p></span>
					<span><router-link to="/Register">Register</router-link></span>
				</div>

				<div v-if="logInStore.logInStatus == true"><LogOut></LogOut></div>
				<p>tite {{ currentRouteQuery }}</p>
			</div>
		</div>

		<!-- gradient or something -->
		<div class="w-[65%] h-full bg-neutral-100">
			<div
				class="w-full h-full bg-BannerLogIn rounded-tl-[5rem] rounded-bl-[5rem]"
			></div>
		</div>
	</div>
</template>
<style scoped></style>
