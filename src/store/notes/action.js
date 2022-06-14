import {
  ADD_NOTE,
  REMOVE_NOTE,
  CHANGE_NOTE,
  FILTER_BY_TAG,
  CLEAR_FILTER_NOTES,
  GET_TAGS,
  ADD_TAG,
  REMOVE__TAG,
} from "./types";

export const removeTag = (id, tag) => ({
  type: REMOVE__TAG,
  payload: { id: id, tag: tag },
});

export const addTag = (newTagData) => {
  return { type: ADD_TAG, payload: newTagData };
};

export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note,
});

export const removeNote = (id) => ({
  type: REMOVE_NOTE,
  payload: id,
});

export const changeNote = (newData) => {
  return { type: CHANGE_NOTE, payload: newData };
};
export const filterByTags = (tag) => {
  return { type: FILTER_BY_TAG, payload: tag };
};
export const clearFilterNotes = () => {
  return { type: CLEAR_FILTER_NOTES };
};
export const getTags = () => ({
  type: GET_TAGS,
});
