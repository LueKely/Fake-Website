import { ref } from 'vue';
import { defineStore } from 'pinia';
export const useLogInStore = defineStore('LogInStore', () => {
	const userName = ref<string | null>('User');
	const profileImage = ref<string>('https://thispersondoesnotexist.com/image');
	const logInStatus = ref<boolean>(false);

	function checkLogInStatus() {
		sessionStorage.length == 0
			? (logInStatus.value = false)
			: (logInStatus.value = true);
	}

	function getUserName(name: string) {
		userName.value = name;
	}
	// put this on mounted functions
	function isAlreadyLoggedIn() {
		if (sessionStorage.length != 0) {
			userName.value = sessionStorage.getItem('name');
		}
	}

	return {
		userName,
		profileImage,
		getUserName,
		isAlreadyLoggedIn,
		logInStatus,
		checkLogInStatus,
	};
});
