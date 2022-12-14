<script setup lang="ts">
	import { useNotificationStore } from '@/stores/NotificationStore';

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

	function removeItem() {
		notificationStore.groupOfNotifications.splice(0, 1);
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
	<div
		class="w-screen h-[90vh] p-6 flex items-center justify-center bg-neutral-100"
	>
		<div class="w-[400px] h-[400px] rounded-lg shadow-xl p-8 mx-5">
			<div>
				<h1 class="font-sans font-bold text-2xl">
					Welcome To
					<span class="font-sans font-bold text-purple-500">Fake Website</span>
				</h1>
			</div>

			<div class="w-full h-full flex flex-col items-center justify-start">
				<p class="font-sans text-base text-neutral-800 mt-5">
					This site was for me to build and learn stuff using penia, vue router,
					tailwind and REST api using axios
				</p>

				<p class="font-sans text-base text-neutral-800 mt-5">
					Using the
					<a
						href="https://reqres.in/"
						target="_blank"
						class="text-purple-500 font-sans text-base"
						>Reqres API</a
					>
					you can do any requests but a catch that none of it will be saved and
					rather send an http response if it succeeded or not
				</p>
			</div>
		</div>

		<!-- playgorund -->
		<div class="w-[400px] h-[400px] rounded-lg shadow-xl p-8 mx-5">
			<h1 class="font-sans font-bold text-purple-500 text-2xl">Playground</h1>
			<p class="font-sans text-base text-neutral-800 my-5">
				Test the notification button if you want
			</p>
			<div class="w-full flex items-center justify-between">
				<button
					class="w-20 h-10 bg-green-500 text-lg text-neutral-100 font-sans font-bold rounded-xl"
					@click="testButtonNotify"
				>
					NOTIFY
				</button>
				<button
					class="w-20 h-10 bg-red-500 text-lg text-neutral-100 font-sans font-bold rounded-xl"
					@click="testWarnButtonNotify"
				>
					WARN
				</button>
				<button
					class="w-20 h-10 bg-orange-500 text-lg text-neutral-100 font-sans font-bold rounded-xl"
					@click="removeItem"
				>
					REMOVE
				</button>
			</div>
		</div>

		<div class="w-[400px] h-[400px] rounded-lg shadow-xl p-8 mx-5">
			<h1 class="font-sans font-bold text-purple-500 text-2xl">
				Special Thanks!
			</h1>
			<p class="font-sans text-base text-neutral-800 my-5">
				Would like to thank my peers for helping me sudgest things on what to do
				in this mini project
			</p>
		</div>

		<div class="w-[400px] h-[400px] rounded-lg shadow-xl p-8 mx-5">
			<h1 class="font-sans font-bold text-purple-500 text-2xl">
				To Login Or Register
			</h1>
			<p class="font-sans text-base text-neutral-800 my-5">
				<span class="font-sans text-base text-neutral-800 font-bold"
					>To Register:</span
				>
				<br />
				Email: eve.holt@reqres.in <br />
				Password: pistol
			</p>
			<p class="font-sans text-base text-neutral-800 my-5">
				<span class="font-sans text-base text-neutral-800 font-bold"
					>To Login:</span
				>
				<br />
				Email: eve.holt@reqres.in <br />
				Password: cityslicka
			</p>
		</div>
	</div>
</template>

<style></style>
