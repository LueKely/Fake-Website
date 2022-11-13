<script setup lang="ts">
	import { useLogInStore } from '@/stores/LogInStore';
	const logInStore = useLogInStore();

	function logOutUser() {
		sessionStorage.clear();
		logInStore.checkLogInStatus();
	}
</script>
<template>
	<button @click="logOutUser">LogOut</button>
</template>
