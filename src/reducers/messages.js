function messages(state = [], action) {
	if (action.type === 'ADD_MESSAGE') {
		return [...state, action.messageList];
	}
	return state;
}
export default messages;
