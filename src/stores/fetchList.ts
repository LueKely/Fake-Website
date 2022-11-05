import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useFetchData = defineStore('fetchPages', () => {
	const dataValue = ref<any>('Wala');
	async function getData(id: number) {
		const fetchedData = ref(
			await axios.get(`https://reqres.in/api/users?page=${id}`)
		);

		dataValue.value = await fetchedData.value;
	}

	return { dataValue, getData };
});
