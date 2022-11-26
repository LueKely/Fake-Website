<script setup lang="ts">
	import axios from 'axios';
	import { reactive, ref, computed, watch } from 'vue';
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

			await alert('success!!');
		} catch (error) {
			alert('error');
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
		<div class="w-[50%] h-full bg-slate-400"></div>

		<div class="w-[50%] h-full">
			<div>
				<h1>FAKE WEBSITE</h1>
			</div>
			<div>
				<h1>Register</h1>
				<p>Hello new user</p>
			</div>

			<div>
				<h1>Insert User Name</h1>
				<input type="text" v-model="newUser.userName" placeholder="username" />
			</div>

			<div>
				<h1>Insert User Email</h1>
				<input type="text" v-model="newUser.userEmail" placeholder="Email" />
			</div>

			<div>
				<div>
					<h1>Insert Password</h1>
					<input
						:type="passType"
						v-model="newUser.userPassword"
						placeholder="password"
					/>
				</div>

				<div>
					<h1>Retype Password</h1>
					<input
						type="password"
						v-model="checkPass"
						placeholder="confirm password"
					/>
				</div>
			</div>

			<div>
				<input type="checkbox" id="showPass" v-model="showPass" />
				<label for="showPass">Show Password</label>
			</div>
			<button @click="registerNewUser">Register!!</button>
			<div>
				<p>Already have an Account?</p>
				<router-link to="/Login">Log in</router-link>
			</div>

			<div v-show="isPassword">*Password does not match*</div>
		</div>
	</div>
</template>
