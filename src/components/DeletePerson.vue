<script setup lang="ts">
	import axios from 'axios';

	const props = defineProps<{ id: number }>();
	const emit = defineEmits<{ (e: 'deleteModal', status: boolean): void }>();

	function hideDeleteModal() {
		emit('deleteModal', false);
	}

	async function deleteUser(prop: number) {
		try {
			axios.delete(`https://reqres.in/api/users/${prop}`);
			alert('user deleted');
			hideDeleteModal();
		} catch (error) {
			alert('error occured');
			console.log(error);
		}
	}
</script>
<template>
	<div
		class="w-screen h-screen fixed z-[11] flex items-center justify-center bg-slate-700 bg-opacity-30"
	>
		<div
			class="w-[25vw] h-[20vh] bg-neutral-100 p-5 flex flex-col items-center justify-center rounded-lg"
		>
			<h1
				class="font-sans text-purple-500 font-bold text-2xl self-start justify-self-start"
			>
				Delete <span class="font-sans text-neutral-800 font-bold">User</span>
			</h1>
			<p
				class="w-full h-[10vh] flex flex-col items-center justify-center m-auto font-sans text-lg font-bold"
			>
				You are about to delete this user {{ props.id }}, are you sure?
			</p>

			<div class="w-[12vw] flex justify-between">
				<button
					class="w-28 h-10 rounded-full border-[1px] border-neutral-500 font-sans font-bold hover:bg-red-600 hover:text-neutral-100 hover:border-red-600 transition-all ease-in-out"
					@click="deleteUser(props.id)"
				>
					Delete
				</button>
				<button
					class="w-28 h-10 rounded-full border-[1px] border-neutral-500 font-sans font-bold hover:bg-purple-500 hover:text-neutral-100 hover:border-purple-500 transition-all ease-in-out"
					@click="hideDeleteModal"
				>
					Cancel
				</button>
			</div>
		</div>
	</div>
</template>
