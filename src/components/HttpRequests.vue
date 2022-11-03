<script setup lang="ts">
	import { ref } from 'vue';
	import axios from 'axios';

	// load all data in page 1
	function getData(page: number): void {
		axios
			.get(`https://reqres.in/api/users?page=${page}?delay=3`)
			.then((response) => {
				console.log(response.data);
			});
	}

	//  post a new user
	type postType = { firstName: string; lastName: string; job: string };

	const me = ref<postType>({ firstName: 'joe', lastName: 'mama', job: 'boss' });

	function postData(userInput: postType): void {
		axios
			.post('https://reqres.in/api/users', {
				name: userInput.firstName,
				lastName: userInput.lastName,
				job: userInput.job,
			})
			.then((response) => {
				console.log(response);
			});
	}
</script>
<template>
	<h1>test</h1>
	<button
		class="w-24 h-8 text-center bg-emerald-700 hover:bg-emerald-400 font-sans font-bold text-lg rounded-md transition ease-in-out duration-500 active:scale-50"
		@click="getData(1)"
	>
		Get Data
	</button>

	<button
		class="w-24 h-8 text-center bg-cyan-500 hover:bg-cyan-300 font-sans font-bold text-lg rounded-md transition ease-in-out duration-500 active:scale-50"
		@click="postData(me)"
	>
		Send Data
	</button>
</template>
