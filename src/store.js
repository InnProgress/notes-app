import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import * as actions from './actions';
import mainReducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    mainReducer,
    applyMiddleware(sagaMiddleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

sagaMiddleware.run(sagas);

store.dispatch(actions.loadNotesAsync());

export default store;

export const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators({ ...actions }, dispatch)
    }
};

export const mapStateToProps = (state, ownProps) => {
    if(ownProps.id && ownProps.id !== true) {
        return { note: state.notes.find(note => note._id === state.activeNote) };
    }
    return state;
};