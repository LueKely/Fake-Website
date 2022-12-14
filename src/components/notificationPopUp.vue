<script setup lang="ts">
	import { ref } from 'vue';
	const props = defineProps({ messageType: Number });
	function sayHello() {
		alert('joe');
	}
	const test = ref('bg-lime-500');
</script>
<template>
	<div
		@click="sayHello"
		:class="{
			'bg-success': props.messageType == 1,
			'bg-error': props.messageType == 0,
		}"
		class="w-[200px] h-[50px] rounded-lg flex items-center justify-center"
	>
		<div
			v-if="props.messageType == 0"
			class="h-full w-[20%] flex items-center justify-center"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6 text-neutral-50"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
				/>
			</svg>
		</div>

		<div
			v-if="props.messageType == 1"
			class="h-full w-[20%] flex items-center justify-center"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6 text-neutral-50"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		</div>

		<div
			class="h-full w-[80%] flex items-center justify-center text-neutral-50 font-sans text-lg text-center"
		>
			<slot>Testing</slot>
		</div>
	</div>
</template>
