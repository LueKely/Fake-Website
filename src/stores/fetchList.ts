import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useFetchData = defineStore('fetchPages', () => {
	const dataValue = ref<any>({});
	const fetchedId = ref<any>();
	async function getData(id: number) {
		const fetchedData = ref(
			await axios.get(`https://reqres.in/api/users?page=${id}`)
		);

		dataValue.value = await { ...fetchedData.value };
		fetchedId.value = await { ...fetchedData.value.data.data };
	}

	return { dataValue, getData, fetchedId };
});
