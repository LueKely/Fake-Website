<script setup lang="ts">
	import axios from 'axios';
	import type { PersonInfo } from '@/stores/types';
	import { reactive, watch, computed } from 'vue';

	import { useNotificationStore } from '@/stores/NotificationStore';
	const notificationStore = useNotificationStore();

	const props = defineProps<{ user: PersonInfo }>();

	let copy = reactive<PersonInfo>({ ...props.user });
	let emit = defineEmits<{ (e: 'closeUpdate', status: boolean): void }>();

	const isFormComplete = computed(() => {
		if (
			copy.avatar == '' ||
			copy.email == '' ||
			copy.first_name == '' ||
			copy.last_name == '' ||
			// yeah namumula and shit kasi di int my bad
			(copy.id as string) == '' ||
			(copy.id as number) < 0
		) {
			return true;
		} else return false;
	});

	function hideModal() {
		emit('closeUpdate', false);
	}

	async function updateUser() {
		try {
			await axios.patch('https://reqres.in/api/users/', { ...copy });

			await hideModal();
			await notificationStore.setNotifyArgument({
				messageType: 1,
				messageProp: 'User Updated',
			});
		} catch (error) {
			alert('alert check joe');
			console.log(error);
			notificationStore.setNotifyArgument({
				messageType: 0,
				messageProp: 'Update Failed',
			});
		}
	}

	watch(props, () => {
		copy = { ...props.user };
	});
</script>
<template>
	<div
		class="w-screen h-screen fixed z-[11] flex items-center justify-center bg-slate-700 bg-opacity-30"
	>
		<div
			class="w-[25vw] h-[40vh] bg-neutral-100 p-5 flex flex-col items-center justify-center rounded-lg"
		>
			<h1 class="font-sans text-purple-500 font-bold text-2xl self-start">
				Update <span class="font-sans text-neutral-800 font-bold"> User </span>
			</h1>
			<div
				class="w-full h-[30vh] flex flex-col items-center justify-center m-auto"
			>
				<div class="w-[21vw] flex justify-between items-center">
					<input
						type="text"
						v-model="copy.first_name"
						placeholder="First Name"
						class="mt-2 w-[10vw] h-10 rounded-full border-neutral-500 border-[1px] focus:outline-none bg-neutral-100 placeholder:font-sans pl-2"
					/>
					<input
						type="text"
						v-model="copy.last_name"
						placeholder="Last Name"
						class="mt-2 w-[10vw] h-10 rounded-full border-neutral-500 border-[1px] focus:outline-none bg-neutral-100 placeholder:font-sans pl-2"
					/>
				</div>

				<input
					class="mt-2 w-[21vw] h-10 rounded-full border-neutral-500 border-[1px] focus:outline-none bg-neutral-100 placeholder:font-sans pl-2"
					type="text"
					v-model="copy.email"
					placeholder="Email"
				/>
				<input
					class="mt-2 w-[21vw] h-10 rounded-full border-neutral-500 border-[1px] focus:outline-none bg-neutral-100 placeholder:font-sans pl-2"
					type="text"
					v-model="copy.avatar"
					placeholder="Profile Url"
				/>
				<input
					class="mt-2 w-[21vw] h-10 rounded-full border-neutral-500 border-[1px] focus:outline-none bg-neutral-100 placeholder:font-sans pl-2"
					type="text"
					v-model="copy.id"
					placeholder="ID"
				/>
			</div>

			<div class="w-[12vw] flex justify-between">
				<button
					:disabled="isFormComplete"
					class="w-28 h-10 rounded-full border-[1px] border-neutral-500 font-sans font-bold hover:bg-purple-500 hover:text-neutral-100 hover:border-purple-500 transition-all ease-in-out disabled:bg-neutral-500 disabled:text-neutral-100 disabled:hover:border-neutral-500 disabled:hover:bg-neutral-100 disabled:hover:text-neutral-600"
					@click="updateUser"
				>
					Send
				</button>
				<button
					class="w-28 h-10 rounded-full border-[1px] border-neutral-500 font-sans font-bold hover:bg-red-600 hover:text-neutral-100 hover:border-red-600 transition-all ease-in-out"
					@click="hideModal"
				>
					Cancel
				</button>
			</div>
		</div>
	</div>
</template>
