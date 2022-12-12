<script setup lang="ts">
	import axios from 'axios';
	import { reactive, ref, computed, watch } from 'vue';
	import { RouterLink } from 'vue-router';
	import { useNotificationStore } from '@/stores/NotificationStore';
	const notificationStore = useNotificationStore();
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

	const isFormComplete = computed(() => {
		if (
			newUser.userEmail == '' ||
			newUser.userEmail == '' ||
			newUser.userPassword == '' ||
			checkPass.value == ''
		) {
			return true;
		} else return false;
	});

	const checkPass = ref<string>('');
	const showPass = ref<boolean>(false);
	const passType = ref<string>('password');
	const isPassword = computed<boolean>(() => {
		return newUser.userPassword != checkPass.value;
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

			await notificationStore.setNotifyArgument({
				messageType: 1,
				messageProp: 'Creation Successful',
			});
		} catch (error) {
			console.log('error');
			await notificationStore.setNotifyArgument({
				messageType: 0,
				messageProp: 'Creation Failed',
			});
		}
	}

	watch(showPass, () => {
		showPass.value == false
			? (passType.value = 'password')
			: (passType.value = 'text');
	});
</script>

<template>
	<div class="w-screen h-[90vh] bg-neutral-100 flex">
		<!--register -->
		<div class="w-[50%] h-full flex items-center justify-center">
			<div class="h-full w-full bg-SignUp bg-no-repeat bg-cover"></div>
		</div>

		<div class="w-[50%] h-full p-10">
			<div class="w-full h-full">
				<div>
					<h1 class="font-sans text-3xl text-violet-500 font-bold">
						FAKE WEBSITE
					</h1>
				</div>

				<div>
					<h1 class="font-sans text-5xl text-neutral-900 font-bold">
						Register New User
					</h1>
				</div>

				<div
					class="w-full h-[80%] flex flex-col items-center justify-center mt-6"
				>
					<div class="mb-2">
						<h1 class="text-neutral-500 font-sans text-base ml-2">Username</h1>
						<input
							class="w-[25vw] h-12 rounded-full border-neutral-500 border-[1px] focus:outline-none bg-neutral-100 placeholder:font-sans pl-2"
							type="text"
							v-model="newUser.userName"
							placeholder="username"
						/>
					</div>

					<div class="mb-2">
						<h1 class="text-neutral-500 font-sans text-base ml-2">Email</h1>
						<input
							class="w-[25vw] h-12 rounded-full border-neutral-500 border-[1px] focus:outline-none bg-neutral-100 placeholder:font-sans pl-2"
							type="text"
							v-model="newUser.userEmail"
							placeholder="eve.holt@reqres.in"
						/>
					</div>

					<div class="flex items-center justify-center mb-2">
						<div class=" ">
							<h1 class="text-neutral-500 font-sans text-base ml-2">
								Password
							</h1>
							<input
								class="w-[12vw] h-12 rounded-full border-neutral-500 border-[1px] focus:outline-none bg-neutral-100 placeholder:font-sans pl-2"
								:type="passType"
								v-model="newUser.userPassword"
								placeholder="pistol"
							/>
						</div>

						<div class="ml-[1vw]">
							<h1 class="text-neutral-500 font-sans text-base ml-2">
								Retype Password
							</h1>
							<input
								class="w-[12vw] h-12 rounded-full border-neutral-500 border-[1px] focus:outline-none bg-neutral-100 placeholder:font-sans pl-2"
								type="password"
								v-model="checkPass"
								placeholder="confirm password"
							/>
						</div>
					</div>
					<div v-show="isPassword" class="font-sans text-red-400 mx-auto">
						*Password does not match*
					</div>
					<div class="w-[25vw] flex items-center justify-start">
						<label for="showPass" class="mr-2 font-sans text-neutral-500"
							>Show Password</label
						>
						<input type="checkbox" id="showPass" v-model="showPass" />
					</div>

					<button
						:disabled="isFormComplete"
						class="mx-auto h-12 w-[25vw] my-3 text-neutral-100 bg-violet-500 rounded-full font-bold font-sans text-lg hover:bg-neutral-100 hover:border-[1px] hover:border-violet-500 hover:text-violet-500 transition-all ease-in-out disabled:bg-neutral-600 disabled:hover:border-neutral-600 disabled:hover:text-neutral-600 disabled:hover:bg-neutral-100"
						@click="registerNewUser"
					>
						Register!!
					</button>

					<div class="w-[25vw] mx-auto flex">
						<p class="font-sans font-light text-base">
							Already have an Account?
						</p>
						<router-link
							class="font-sans font-light text-base text-violet-500 hover:font-bold transition-all ease-in-out ml-1"
							to="/Login"
							>Log in</router-link
						>
					</div>

					<!-- <div v-show="isPassword">*Password does not match*</div> -->
				</div>
			</div>
		</div>
	</div>
</template>
