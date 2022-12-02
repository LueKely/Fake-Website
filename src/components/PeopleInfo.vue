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
		class="w-[18vw] h-[35vh] bg-slate-100 m-10 rounded-md overflow-hidden relative"
	>
		<div
			class="w-[18vw] h-[40%] flex items-center justify-center bg-center bg-cover bg-no-repeat shadow-lg"
			:style="bgAvatar"
		>
			<div
				class="w-full h-full flex items-center justify-center backdrop-blur-lg"
			></div>
		</div>

		<img
			class="h-[100px] w-[100px] rounded-full absolute top-[23%] left-[35%] shadow-lg"
			:src="props.fetchedPerson.avatar"
			:alt="props.fetchedPerson.first_name"
		/>

		<!-- <h1>This is the {{ props.fetchedPerson }} info</h1> -->
		<h1>
			{{ props.fetchedPerson.first_name }} &nbsp;{{
				props.fetchedPerson.last_name
			}}
		</h1>
		<button @click="showDetails">More Details</button>
		<div v-if="details == true">
			<PersonalDetail :fetched-person="props.fetchedPerson"></PersonalDetail>
			<button @click="hideDetails">Hide Details</button>
		</div>
	</div>
</template>

<style scoped></style>
