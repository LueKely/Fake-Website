import { reactive, ref, computed } from 'vue';
import { defineStore } from 'pinia';

// type
export type notifyType = { messageType: number; messageProp: String };

export const useNotificationStore = defineStore('notify', () => {
	let intervalId: any = null;
	// init array of the notifications
	const groupOfNotifications = ref<notifyType[]>([]);

	// returns the length of the array
	const notificationGroupLength = computed((): number => {
		if (groupOfNotifications.value?.length != undefined) {
			return groupOfNotifications.value?.length;
		} else return 0;
	});

	// will check if notif is already running if not run it
	function notificationTimer() {
		if (!intervalId) {
			intervalId = setInterval(() => {
				groupOfNotifications.value.shift();
			}, 3000);
		}
	}

	function stopDel() {
		clearInterval(intervalId);
		intervalId = null;
	}

	const notifyArguments = reactive<notifyType>({
		// 1 is success and 0 is error
		messageType: 1,
		messageProp: 'none',
	});

	function setNotifyArgument(notificationProp: notifyType) {
		notifyArguments.messageProp = notificationProp.messageProp;
		notifyArguments.messageType = notificationProp.messageType;
		groupOfNotifications.value?.push({ ...notifyArguments });
	}

	return {
		groupOfNotifications,
		notifyArguments,
		setNotifyArgument,
		notificationTimer,
		notificationGroupLength,
		stopDel,
	};
});
