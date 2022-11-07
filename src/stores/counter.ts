import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
export const useCounterStore = defineStore('counter', () => {
	const count = ref(0);
	const doubleCount = computed(() => count.value * 2);
	function increment() {
		count.value++;
	}

	return { count, doubleCount, increment };
});

// export const website = defineStore('websiteName', () => {
// 	const test = ref('joe');
// 	return test;
// });
// export const website = defineStore('websiteName', {
// 	state: () => {
// 		return {
// 			test: 'hello joe',
// 		};
// 	},
// });
