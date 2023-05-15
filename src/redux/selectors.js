export const selectContacts = state => state.contacts.items;
// 1 раз змінна contacts ми звертаємось до contacts які знаходяться в rootReducer,
// 2 раз до items які знаходяться в contactSlice в initialState.

export const selectFilter = state => state.filter.filter;
// 1 раз змінна filter ми звертаємось до filter які знаходяться в rootReducer в стейті,
// 2 раз до filter які знаходяться в contactFilter в initialState.
