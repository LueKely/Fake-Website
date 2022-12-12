<script setup lang="ts">
	import router from '@/router';
	import { ref } from 'vue';
	const search = ref<string>('');

	function submitSearchQuery() {
		router.push({ path: '/Search', query: { result: search.value } });
	}
</script>

<template>
	<div class="flex w-[270px] h-[40px]">
		<input
			class="focus:outline-none w-[80%] h-full placeholder:text-violet-500 placeholder:opacity-50 border-violet-500 border-[1px] border-r-0 rounded-tl-full rounded-bl-full pl-2"
			type="text"
			v-model="search"
			placeholder="Search a Person!"
		/>
		<button
			class="w-[20%] h-full bg-violet-500 hover:bg-violet-400 transition-colors ease-in-out rounded-tr-full rounded-br-full active flex justify-center items-center"
			@click="submitSearchQuery"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6 text-neutral-100"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
				/>
			</svg>
		</button>
	</div>
</template>
