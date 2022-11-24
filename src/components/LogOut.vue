<script setup lang="ts">
	import router from '@/router';
	import { useLogInStore } from '@/stores/LogInStore';

	const logInStore = useLogInStore();

	function logOutUser() {
		sessionStorage.clear();
		logInStore.checkLogInStatus();
		router.push({ name: 'LogIn' });
	}
</script>
<template>
	<button
		@click="logOutUser"
		class="font-sans font-light text-base text-violet-500 hover:font-bold transition-all ease-in-out text-center"
	>
		Log Out
	</button>
</template>
