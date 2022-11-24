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
		<div
			class="w-[40%] h-full bg-neutral-100 flex items-center justify-center p-[30px]"
		>
			<div class="w-full h-full shadow-lg flex flex-col p-11">
				<div class="mt-2">
					<h1 class="text-xl text-violet-500 font-sans font-bold">Log In</h1>
				</div>
				<!-- username -->
				<div class="mb-2">
					<div class="my-2">
						<h1 class="text-neutral-500 font-sans">Username</h1>
					</div>

					<input
						type="text"
						v-model="userLogIn.email"
						placeholder="eve.holt@reqres.in"
						class="w-full h-10 rounded-full border-neutral-500 border-[1px] focus:outline-none bg-neutral-100 placeholder:font-sans pl-2"
					/>
				</div>

				<!-- password -->
				<div class="mb-2">
					<div class="my-2">
						<h1 class="text-neutral-500 font-sans">Password</h1>
					</div>
					<input
						:type="passType"
						v-model="userLogIn.password"
						placeholder="cityslicka"
						class="w-full h-10 rounded-full border-neutral-500 border-[1px] focus:outline-none bg-neutral-100 placeholder:font-sans pl-2"
					/>
				</div>
				<!-- show password -->
				<div>
					<label for="showPass" class="mr-2 font-sans">Show Password</label>
					<input type="checkbox" id="showPass" v-model="showPass" />
				</div>

				<button
					@click="userLogInReq"
					class="h-10 w-full my-3 text-neutral-100 bg-violet-500 rounded-full font-bold font-sans text-lg hover:bg-neutral-100 hover:border-[1px] hover:border-violet-500 hover:text-violet-500 transition-all ease-in-out"
				>
					Log In
				</button>
				<div class="flex">
					<p class="font-sans font-light text-base">Don't have an account?</p>
					<router-link
						class="font-sans font-light text-base text-violet-500 hover:font-bold transition-all ease-in-out ml-1"
						to="/Register"
					>
						Register</router-link
					>
				</div>

				<div class="w-fit h-fit" v-if="logInStore.logInStatus == true">
					<LogOut></LogOut>
				</div>
				<!-- <p>tite {{ currentRouteQuery }}</p> -->
			</div>
		</div>

		<!-- gradient or something -->
		<div class="w-[60%] h-full bg-neutral-100">
			<div
				class="w-full h-full bg-BannerLogIn rounded-tl-[4rem] rounded-bl-[4rem]"
			></div>
		</div>
	</div>
</template>
<style scoped></style>
