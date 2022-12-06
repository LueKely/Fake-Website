import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';
type notifyType = { messageType: number; messageProp: String };
export const useNotificationStore = defineStore('notify', () => {
	const openNotification = ref<boolean>(false);
	const notifyArguments = reactive<notifyType>({
		// 1 is success and 0 is error
		messageType: 1,
		messageProp: 'none',
	});
	function getnotifyArgument(notificationProp: notifyType) {
		notificationProp.messageProp = notifyArguments.messageProp;
		notificationProp.messageType = notifyArguments.messageType;
	}

	return { openNotification, notifyArguments, getnotifyArgument };
});
