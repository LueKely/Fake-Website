<script setup lang="ts">
	import { ref } from 'vue';
	import type { PersonInfo } from '@/stores/types';
	import UpdatePerson from './UpdatePerson.vue';
	import DeletePerson from './DeletePerson.vue';
	const modalStatus = ref(false);
	const delModalStatus = ref(false);

	function showModal() {
		modalStatus.value = true;
	}
	function showModalDel() {
		delModalStatus.value = true;
	}
	function hideModal(e: boolean) {
		modalStatus.value = e;
	}
	function hideModalDel(e: boolean) {
		delModalStatus.value = e;
	}

	const props = defineProps<{ fetchedPerson: PersonInfo }>();
</script>
<template>
	<div class="w-full h-full">
		<h1 class="font-sans font-bold text-2xl h-[10%]">DETAILS</h1>
		<div class="h-[70%] flex items-center justify-center">
			<div>
				<p class="font-sans text-lg">
					<b class="font-bold">Image url:</b> {{ props.fetchedPerson.avatar }}
				</p>
				<p class="font-sans text-lg">
					<b>Full name:</b> {{ props.fetchedPerson.first_name }}
					{{ props.fetchedPerson.last_name }}
				</p>

				<p class="font-sans text-lg">
					<b>Email:</b> {{ props.fetchedPerson.email }}
				</p>
				<p class="font-sans text-lg">
					<b>ID:&nbsp;</b>{{ props.fetchedPerson.id }}
				</p>
			</div>
		</div>

		<!-- button -->
		<div class="mx-auto w-[45%] h-[20%] flex items-center justify-between">
			<button
				class="w-28 h-10 rounded-full border-[1px] border-neutral-500 font-sans font-bold hover:bg-lime-500 hover:text-neutral-100 hover:border-lime-500 transition-all ease-in-out"
				@click="showModal"
			>
				Update
			</button>
			<button
				class="w-28 h-10 rounded-full border-[1px] border-neutral-500 font-sans font-bold hover:bg-red-600 hover:text-neutral-100 hover:border-red-600 transition-all ease-in-out"
				@click="showModalDel"
			>
				Delete
			</button>
		</div>

		<!-- teleport -->
		<div>
			<div v-if="modalStatus == true">
				<teleport to="#test">
					<UpdatePerson
						:user="props.fetchedPerson"
						@close-update="hideModal"
					></UpdatePerson
				></teleport>
			</div>

			<div v-if="delModalStatus == true">
				<Teleport to="#test">
					<DeletePerson
						:id="props.fetchedPerson.id"
						@delete-modal="hideModalDel"
					></DeletePerson
				></Teleport>
			</div>
		</div>
	</div>
</template>
<style></style>
