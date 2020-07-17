export function getSubscribedEmailsSuccess(emails) {
	return {
		type: 'SUBSCRIBED_EMAILS_SUCCESS',
		data: emails,
	};
}
