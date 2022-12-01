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
	<div
		class="w-screen h-[90vh] bgwave flex items-center justify-center bg-WaveColor bg-violet-500"
	>
		<div
			class="w-[40vw] max-h-[80vh] min-h-[50vh] m-auto bg-neutral-100 drop-shadow-xl bg-opacity-10 backdrop-blur-sm rounded-md p-9"
		>
			<h1 class="font-sans text-neutral-100 font-bold text-5xl mb-3">
				Create User
			</h1>
			<div class="h-full w-full flex items-center justify-center">
				<div class="flex flex-col items-center justify-center">
					<div class="flex items-center justify-center my-2">
						<div class="w-[12vw] h-14 mr-[1vw]">
							<input
								class="w-full h-full focus:outline-none drop-shadow-lg bg-neutral-100 bg-opacity-30 backdrop-blur-sm rounded-full pl-2 text-neutral-50 font-sans placeholder:text-neutral-50 placeholder:font-sans"
								type="text"
								v-model="newUser.firstName"
								placeholder="First Name"
							/>
						</div>
						<div class="w-[12vw] h-14">
							<input
								type="text"
								class="w-full h-full focus:outline-none drop-shadow-lg bg-neutral-100 bg-opacity-30 backdrop-blur-sm rounded-full pl-2 text-neutral-50 font-sans placeholder:text-neutral-50 placeholder:font-sans"
								v-model="newUser.lastName"
								placeholder="Last Name"
							/>
						</div>
					</div>
					<div class="w-[25vw] h-14 my-2">
						<input
							type="text"
							class="w-full h-full focus:outline-none drop-shadow-lg bg-neutral-100 bg-opacity-30 backdrop-blur-sm rounded-full pl-2 text-neutral-50 font-sans placeholder:text-neutral-50 placeholder:font-sans"
							v-model="newUser.email"
							placeholder="Email"
						/>
					</div>

					<div class="w-[25vw] h-14 my-2">
						<input
							class="w-full h-full focus:outline-none drop-shadow-lg bg-neutral-100 bg-opacity-30 backdrop-blur-sm rounded-full pl-2 text-neutral-50 font-sans placeholder:text-neutral-50 placeholder:font-sans"
							type="text"
							v-model="newUser.avatar"
							placeholder="Avatar URL"
						/>
					</div>
					<div
						class="w-[21vw] h-12 flex items-end justify-between mx-auto mt-6"
					>
						<button
							@click="createNewUser"
							class="w-[10vw] h-12 drop-shadow-lg text-xl bg-neutral-100 bg-opacity-30 backdrop-blur-sm rounded-full pl-2 text-neutral-50 font-sans font-bold hover:text-violet-500 hover:bg-opacity-60 transition-all ease-in-out"
						>
							Submit
						</button>
						<button
							class="w-[10vw] h-12 drop-shadow-lg text-xl bg-neutral-100 bg-opacity-30 backdrop-blur-sm rounded-full pl-2 text-neutral-50 font-sans font-bold hover:text-violet-500 hover:bg-opacity-60 transition-all ease-in-out"
							@click="clearInput"
						>
							Clear
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped></style>
