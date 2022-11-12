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
	<h1>register nigger</h1>
	<input type="text" v-model="newUser.userName" placeholder="Insert username" />
	<input
		type="text"
		v-model="newUser.userEmail"
		placeholder="Insert user Email"
	/>
	<input
		:type="passType"
		v-model="newUser.userPassword"
		placeholder="Insert password"
	/>
	<input type="password" v-model="checkPass" placeholder="confirm password" />
	<button @click="registerNewUser">Register!!</button>
	<div>
		<p>Already have a password?</p>
		<router-link to="/Login">Log in</router-link>
	</div>

	<input type="checkbox" id="showPass" v-model="showPass" />
	<label for="showPass">Show Password</label>
	<div v-show="isPassword">Password does not match</div>
</template>
