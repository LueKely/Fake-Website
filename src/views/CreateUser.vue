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
	<div class="w-screen h-[90vh] bgwave flex items-center justify-center">
		<div class="w-[40vw] h-[80vh] m-auto">
			<h1>Create User</h1>
			<div>
				<div>
					<label>Tite</label>

					<input
						type="text"
						v-model="newUser.firstName"
						placeholder="first name"
					/>
				</div>

				<input type="text" v-model="newUser.lastName" placeholder="last name" />
				<input type="text" v-model="newUser.email" placeholder="email" />
				<input type="text" v-model="newUser.avatar" placeholder="Avatar URL" />
			</div>
			<button @click="createNewUser">Submit</button>
			<button @click="clearInput">Clear</button>
		</div>
	</div>
</template>
<style scoped>
	.bgwave {
		background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='70' height='8' patternTransform='scale(2) rotate(40)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(251, 95%, 92%, 1)'/><path d='M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2c9.272 0 14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6 44.272-6 49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14c-9.272 0-14.215 5.258-18.7 10.339C11.918 1.306 8.353 6-.02 6.002'  stroke-width='0.5' stroke='hsla(258, 90%, 66%, 0.36)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
	}
</style>
