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

import Moment from "moment";
import { nanoid } from "nanoid";

const initialState = {
  notes: [],
  filteredNotes: [],
  tags: [],
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE__TAG:
      return {
        ...state,
        notes: state.notes.map((note) => {
          return note.id === action.payload.id
            ? {
                ...note,
                tags: note.tags.filter((tag) => tag !== action.payload.tag),
              }
            : note;
        }),
        filteredNotes: state.filteredNotes.map((note) => {
          return note.id === action.payload.id
            ? {
                ...note,
                tags: note.tags.filter((tag) => tag !== action.payload.tag),
              }
            : note;
        }),
      };

    case ADD_TAG:
      return {
        ...state,
        notes: state.notes.map((note) => {
          console.log(note);
          return note.id === action.payload.id
            ? {
                ...note,
                tags: [...new Set([...note.tags, action.payload.tag])],
              }
            : note;
        }),
        filteredNotes: state.filteredNotes.map((note) => {
          return note.id === action.payload.id
            ? {
                ...note,
                tags: [...new Set([...note.tags, action.payload.tag])],
              }
            : note;
        }),
      };
    case GET_TAGS:
      return {
        ...state,
        tags: [
          ...new Set(
            [].concat.apply(
              [],
              state.notes.map((note) => {
                return note.tags;
              })
            )
          ),
        ],
      };

    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: nanoid(),
            date: Moment().format("DD-MM-YYYY, h:mm:ss"),
            text: action.payload.text,
            tags: action.payload.tags,
          },
        ],
      };
    case REMOVE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
        filteredNotes: state.filteredNotes.filter(
          (note) => note.id !== action.payload.id
        ),
      };
    case CHANGE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) => {
          return note.id === action.payload.id
            ? {
                ...note,
                text: action.payload.text,
                tags: [...new Set([...note.tags, ...action.payload.tags])],
              }
            : note;
        }),
        filteredNotes: state.filteredNotes.map((note) => {
          return note.id === action.payload.id
            ? {
                ...note,
                text: action.payload.text,
                tags: [...new Set([...note.tags, ...action.payload.tags])],
              }
            : note;
        }),
      };
    case FILTER_BY_TAG:
      return {
        ...state,
        filteredNotes: state.notes.filter((note) =>
          note.tags.includes(action.payload.tag)
        ),
      };
    case CLEAR_FILTER_NOTES: {
      return {
        ...state,
        filteredNotes: [],
      };
    }
    default:
      return state;
  }
};
