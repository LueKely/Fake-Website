<script setup lang="ts">
	import { useNotificationStore } from '@/stores/NotificationStore';
	import HttpRequestsVue from '@/components/HttpRequests.vue';
	import notificationPopUp from '@/components/notificationPopUp.vue';

	import { watch } from 'vue';
	import { storeToRefs } from 'pinia';

	// destructuring? idk
	const notificationStore = useNotificationStore();

	const { notificationGroupLength } = storeToRefs(notificationStore);

	// simulate addimg shit to notification
	function testButtonNotify() {
		// alert('notified');
		notificationStore.setNotifyArgument({
			messageType: 1,
			messageProp: 'SUCCESS',
		});
	}

	function testWarnButtonNotify() {
		// alert('notified');
		notificationStore.setNotifyArgument({
			messageType: 0,
			messageProp: 'WARN',
		});
	}

	watch(notificationGroupLength, () => {
		if (notificationGroupLength.value != 0) {
			notificationStore.notificationTimer();
		} else {
			notificationStore.stopDel();
		}
	});
</script>

<template>
	<h1>About</h1>
	<HttpRequestsVue></HttpRequestsVue>
	<!-- notification pop up btn-->
	<button
		class="w-20 h-10 bg-green-500 text-lg text-neutral-100 font-sans font-bold"
		@click="testButtonNotify"
	>
		NOTIFY
	</button>
	<button
		class="w-20 h-10 bg-red-500 text-lg text-neutral-100 font-sans font-bold"
		@click="testWarnButtonNotify"
	>
		WARN
	</button>
</template>

<style></style>
