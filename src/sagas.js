import { put, takeLatest, takeEvery, all } from 'redux-saga/effects';
import * as api from './api';

import * as actions from './actions';

function* watchLoadNotes() {
    yield takeLatest('LOAD_NOTES_ASYNC', loadNotes);
}
function* loadNotes() {
    const notes = yield api.getNotes();
    yield put(actions.loadNotes(notes));
}

function* watchAddNote() {
    yield takeLatest('ADD_NOTE_ASYNC', addNote);
}
function* addNote({ payload }) {
    const submittedData = yield api.insertNote(payload);
    yield put(actions.addNote(submittedData));
    yield put(actions.selectNote(submittedData._id));
}

function* watchUpdateNote() {
    yield takeEvery('UPDATE_NOTE_ASYNC', updateNote);
}
function* updateNote({ payload }) {
    const updatedData = yield api.updateNote(payload);
    yield put(actions.updateNote(updatedData));
}

function* watchRemoveNote() {
    yield takeLatest('REMOVE_NOTE_ASYNC', removeNote);
}
function* removeNote({ id }) {
    yield api.removeNote(id);
    yield put(actions.removeNote(id));
    yield put(actions.selectNote(null));
}

export default function* sagas() {
    yield all([
        watchLoadNotes(),
        watchAddNote(),
        watchUpdateNote(),
        watchRemoveNote()
    ]);
}