import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import type { PersonInfo } from '@/stores/types';

export const useFetchData = defineStore('fetchPages', () => {
	const dataValue = ref<any>({});
	const fetchedId = ref<PersonInfo[]>();
	async function getData(id: number) {
		const fetchedData = ref(
			await axios.get(`https://reqres.in/api/users?page=${id}`)
		);

		dataValue.value = await { ...fetchedData.value };
		fetchedId.value = await [...fetchedData.value.data.data];
	}

	return { dataValue, getData, fetchedId };
});
