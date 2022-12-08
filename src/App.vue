<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router';
	import { useCounterStore } from '@/stores/counter';
	import { people } from '@/stores/yow';

	import SearchComponent from './components/SearchComponent.vue';

	import notificationPopUp from '@/components/notificationPopUp.vue';
	import { useNotificationStore } from '@/stores/NotificationStore';
	import { watch } from 'vue';
	import { storeToRefs } from 'pinia';

	const count = useCounterStore();
	const test = people();

	console.log(test.sayHiName);

	console.log(count.count);

	// notification stuff
	// destructuring? idk
	const notificationStore = useNotificationStore();
	const groupOfNotificationStore = notificationStore.groupOfNotifications;
	const { notificationGroupLength } = storeToRefs(notificationStore);

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
		class="w-full h-[10vh] p-4 bg-neutral-100 border-b-[1px] border-violet-500 flex items-center"
	>
		<div>
			<RouterLink to="/"
				><div class="text-violet-500 font-bold text-3xl text-center">
					FAKE WEBSITE
				</div>
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
				to="/PageView"
				>View Page
			</RouterLink>

			<RouterLink
				class="font-bold text-gray-900 hover:text-gray-500 transition-all ease-in-out"
				to="/Create"
				>Create User
			</RouterLink>
		</nav>

		<div class="m-auto">
			<SearchComponent></SearchComponent>
		</div>

		<nav
			class="w-[230px] h-[40px] pl-2 m-0 font-bold text-lg flex border-violet-500 border-[1px] border-r-0 rounded-full items-center justify-between"
		>
			<RouterLink
				class="font-bold text-gray-900 hover:text-gray-500 transition-all ease-in-out"
				to="/LogIn"
				>&nbsp; Log in</RouterLink
			>
			<RouterLink
				class="w-[60%] h-full bg-WaveColor bg-violet-500 rounded-full p-2 border-violet-500 overflow-hidden flex items-center justify-center"
				to="/Register"
			>
				<div
					class="absolute top-0 right-0 w-full h-full z-0 hover:bg-slate-600 hover:opacity-10 transition-all ease-in-out"
				></div>
				<p
					class="font-bold text-center text-neutral-50 z-1 pointer-events-none"
				>
					Register
				</p>
			</RouterLink>
		</nav>
	</div>

	<router-view></router-view>
	<!-- <GoBack></GoBack> -->

	<!-- this is were the notification goes -->
	<div
		class="w-screen h-screen fixed flex flex-col-reverse items-end justify-start z-50 top-0 left-0 pointer-events-none p-10"
	>
		<div
			v-for="(notif, index) in groupOfNotificationStore"
			:key="index"
			class="my-2"
		>
			<notificationPopUp></notificationPopUp>
		</div>
	</div>
</template>

<style scoped></style>
