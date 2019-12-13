export const loadNotesAsync = () => ({
    type: 'LOAD_NOTES_ASYNC'
})
export const loadNotes = notes => ({
    type: 'LOAD_NOTES',
    notes
})

export const addNoteAsync = data => ({
    type: 'ADD_NOTE_ASYNC',
    payload: data
})
export const addNote = data => ({
    type: 'ADD_NOTE',
    newNote: data
})

export const updateNoteAsync = data => ({
    type: 'UPDATE_NOTE_ASYNC',
    payload: data
})
export const updateNote = data => ({
    type: 'UPDATE_NOTE',
    payload: data
})

export const removeNoteAsync = id => ({
    type: 'REMOVE_NOTE_ASYNC',
    id
})
export const removeNote = id => ({
    type: 'REMOVE_NOTE',
    id
})

export const selectNote = id => ({
    type: 'SET_ACTIVE_NOTE',
    id
})