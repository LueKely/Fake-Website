import { reactive, ref, computed } from 'vue';
import { defineStore } from 'pinia';

// type
type notifyType = { messageType: number; messageProp: String };

export const useNotificationStore = defineStore('notify', () => {
	let lue: any = null;
	const groupOfNotifications = ref<notifyType[]>([]);

	const notificationGroupLength = computed((): number => {
		if (groupOfNotifications.value?.length != undefined) {
			return groupOfNotifications.value?.length;
		} else return 0;
	});

	function notificationTimer() {
		if (!lue) {
			lue = setInterval(() => {
				groupOfNotifications.value.shift();
			}, 2000);
		}
	}

	function stopDel() {
		clearInterval(lue);
		lue = null;
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
