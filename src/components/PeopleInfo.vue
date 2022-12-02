<script setup lang="ts">
	import { onMounted, computed, ref } from 'vue';
	import type { PersonInfo } from '@/stores/types';
	import PersonalDetail from './PersonalDetail.vue';
	const props = defineProps<{ fetchedPerson: PersonInfo }>();
	const details = ref<boolean>(false);

	function showDetails() {
		details.value = true;
	}

	function hideDetails() {
		details.value = false;
	}
	onMounted(() => {});

	const bgAvatar = computed(() => {
		return { 'background-image': `url('${props.fetchedPerson.avatar}')` };
	});
</script>

<template>
	<div
		class="w-[250px] h-[300px] bg-neutral-100 m-10 rounded-md overflow-hidden relative shadow-lg"
	>
		<div
			class="w-full h-[40%] flex items-center justify-center bg-center bg-cover bg-no-repeat shadow-lg"
			:style="bgAvatar"
		>
			<div
				class="w-full h-full flex items-center justify-center backdrop-blur-lg"
			></div>
		</div>

		<img
			class="h-[100px] w-[100px] rounded-full absolute top-[23%] left-[30%] shadow-lg"
			:src="props.fetchedPerson.avatar"
			:alt="props.fetchedPerson.first_name"
		/>

		<!-- <h1>This is the {{ props.fetchedPerson }} info</h1> -->
		<div class="w-full h-[60%] flex flex-col items-center justify-start">
			<div class="mt-14">
				<h1 class="font-sans font-bold text-zinc-800 text-lg">
					{{ props.fetchedPerson.first_name }} &nbsp;{{
						props.fetchedPerson.last_name
					}}
				</h1>
			</div>
			<div>
				<button @click="showDetails" class="font-sans font-light">
					More Details
				</button>
			</div>
			<div v-if="details == true">
				<PersonalDetail :fetched-person="props.fetchedPerson"></PersonalDetail>
				<button @click="hideDetails">Hide Details</button>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
