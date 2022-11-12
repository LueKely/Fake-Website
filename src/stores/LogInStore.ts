import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
export const useLogInStore = defineStore('LogInStore', () => {
	const userName = ref<string | null>('User');
	const profileImage = ref<string>('https://thispersondoesnotexist.com/image');
	const notLoggedIn = computed<boolean>(() => {
		return sessionStorage.length == 0;
	});

	function getUserName(name: string) {
		userName.value = name;
	}
	// put this on mounted functions
	function isAlreadyLoggedIn() {
		if (notLoggedIn.value == false) {
			userName.value = sessionStorage.getItem('name');
		}
	}

	return {
		userName,
		profileImage,
		notLoggedIn,
		getUserName,
		isAlreadyLoggedIn,
	};
});
