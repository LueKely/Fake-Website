<script setup lang="ts">
	import HttpRequestsVue from '@/components/HttpRequests.vue';
	import notificationPopUp from '@/components/notificationPopUp.vue';
</script>

<template>
	<h1>About</h1>
	<HttpRequestsVue></HttpRequestsVue>
	<div
		class="w-screen h-screen fixed flex items-end justify-end z-50 top-0 left-0 pointer-events-none p-10"
	>
		<notificationPopUp></notificationPopUp>
	</div>
</template>

<style></style>
