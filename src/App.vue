<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router';
	import { useCounterStore } from '@/stores/counter';
	import { people } from '@/stores/yow';
	import GoBack from './components/GoBack.vue';

	const count = useCounterStore();
	const test = people();

	console.log(test.sayHiName);

	console.log(count.count);
</script>

<template>
	<div
		class="w-full h-24 p-4 bg-neutral-100 border-b-4 border-violet-500 flex items-center"
	>
		<div>
			<RouterLink class="text-violet-500 font-bold text-xl" to="/"
				>FAKE WEBSITE
			</RouterLink>
		</div>

		<nav
			class="font-bold text-lg flex items-center justify-between w-[30vw] mr-auto ml-[5rem]"
		>
			<RouterLink
				class="font-bold text-gray-900 hover:text-gray-500 transition-all ease-in-out"
				to="/"
				>Home</RouterLink
			>
			<RouterLink
				class="font-bold text-gray-900 hover:text-gray-500 transition-all ease-in-out"
				to="/about"
				>About
			</RouterLink>
			<RouterLink
				class="font-bold text-gray-900 hover:text-gray-500 transition-all ease-in-out"
				to="/PageView/Page/1"
				>View Page
			</RouterLink>

			<RouterLink
				class="font-bold text-gray-900 hover:text-gray-500 transition-all ease-in-out"
				to="/Create"
				>Create User
			</RouterLink>
		</nav>

		<nav
			class="w-[15vw] h-[7.5vh] m-0 font-bold text-lg flex border-violet-500 border-2 border-r-0 rounded-full items-center justify-between"
		>
			<RouterLink class="font-bold w-20 text-center" to="/LogIn"
				>&nbsp; Log in</RouterLink
			>
			<RouterLink
				class="font-bold w-28 text-center bg-WaveColor bg-violet-500 text-neutral-50 rounded-full p-2 border-violet-500"
				to="/Register"
				>Register
			</RouterLink>
		</nav>
	</div>

	<router-view></router-view>
	<GoBack></GoBack>
</template>

<style scoped></style>
