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
	<button @click="logOutUser">LogOut</button>
</template>
