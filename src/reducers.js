import { combineReducers } from 'redux';
import { NotificationManager } from 'react-notifications';

const initialState = {
    notes: [],
    activeNote: false
};

const notesCrudReducer = (state = initialState.notes, action) => {
    switch(action.type) {
        case 'LOAD_NOTES': {
            
            return action.notes;
        }
        case 'ADD_NOTE': {
            NotificationManager.success('Success', 'Note created');
            return [action.newNote, ...state]
        }
        case 'UPDATE_NOTE': {
            const notes = [...state];
            const updatedNoteIndex = notes.findIndex(note => note._id === action.payload._id);
            notes[updatedNoteIndex] = action.payload;
            NotificationManager.success('Success', 'Note updated');
            return notes;
        }
        case 'REMOVE_NOTE': {
            const notes = [...state];
            const index = state.findIndex(note => note._id === action.id);
            NotificationManager.success('Success', 'Note removed');
            return [...notes.slice(0, index), ...notes.slice(index + 1, notes.length)];
        }
        default: return state;
    }
};

const notesActiveReducer = (state = initialState.activeNote, action) => {
    if(action.type === 'SET_ACTIVE_NOTE') {
        return action.id;
    }
    return state;
};

export default combineReducers({
    notes: notesCrudReducer,
    activeNote: notesActiveReducer
});