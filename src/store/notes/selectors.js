export const noteSelector = (state) => {
  return state.notes.notes ?? [];
};
export const filteredNotesSelector = (state) => {
  return state.notes.filteredNotes ?? [];
};
export const tagsSelector = (state) => {
  return state.notes.tags ?? [];
};
