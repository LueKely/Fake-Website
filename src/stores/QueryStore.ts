import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useQueryStore = defineStore('CurrentQuery', () => {
	const currentRouteQuery = ref<string>('/');
	function setRouteQuery(value: string) {
		currentRouteQuery.value = value;
	}

	return { currentRouteQuery, setRouteQuery };
});
