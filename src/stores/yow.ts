import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const people = defineStore('person', () => {
	const sayHi = ref('hi');
	const sayName = ref('Lue');
	
	const sayHiName = computed(() => 'hi ' + sayName.value);
	function changeName(test: string): void {
		sayName.value = test;
	}

	return { sayHi, sayName, sayHiName, changeName };
});
