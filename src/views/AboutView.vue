<script setup lang="ts">
	import { useNotificationStore } from '@/stores/NotificationStore';
	import HttpRequestsVue from '@/components/HttpRequests.vue';
	import notificationPopUp from '@/components/notificationPopUp.vue';

	import { ref, computed, reactive, onMounted, watch } from 'vue';
	import { storeToRefs } from 'pinia';

	// destructuring? idk
	const notificationStore = useNotificationStore();
	const groupOfNotificationStore = notificationStore.groupOfNotifications;
	const { notificationGroupLength } = storeToRefs(notificationStore);

	// simulate addimg shit to notification
	function testButtonNotify() {
		// alert('notified');
		notificationStore.setNotifyArgument({
			messageType: 1,
			messageProp: 'test',
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
		class="w-20 h-10 bg-red-500 text-lg text-neutral-100 font-sans font-bold"
		@click="testButtonNotify"
	>
		NOTIFY
	</button>
	<button
		class="w-20 h-10 bg-red-500 text-lg text-neutral-100 font-sans font-bold"
	>
		delete
	</button>
	<div
		class="w-screen h-screen fixed flex flex-col-reverse items-end justify-end z-50 top-0 left-0 pointer-events-none p-10"
	>
		<div v-for="(notif, index) in groupOfNotificationStore" :key="index">
			<notificationPopUp></notificationPopUp>
		</div>
	</div>
</template>

<style></style>
