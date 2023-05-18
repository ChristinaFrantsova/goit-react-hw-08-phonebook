export const selectContacts = state => state.contacts.items;
// 1 раз змінна contacts ми звертаємось до contacts які знаходяться в rootReducer,
// 2 раз до items які знаходяться в contactSlice в initialState.

export const selectLoading = state => state.contacts.isLoading;
