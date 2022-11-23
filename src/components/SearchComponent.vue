<script setup lang="ts">
	import router from '@/router';
	import { ref } from 'vue';
	const search = ref<string>('');

	function submitSearchQuery() {
		router.push({ path: '/Search', query: { result: search.value } });
	}
</script>

<template>
	<div class="flex w-[250px] h-[50px]">
		<input
			class="focus:outline-none w-[80%] h-full border-violet-500 border-[1px] border-r-0 rounded-tl-full rounded-bl-full pl-2"
			type="text"
			v-model="search"
			placeholder="Search a Person!"
		/>
		<button
			class="w-[20%] h-full bg-violet-500 hover:bg-violet-400 transition-colors ease-in-out rounded-tr-full rounded-br-full active"
			@click="submitSearchQuery"
		>
			send
		</button>
	</div>
</template>
