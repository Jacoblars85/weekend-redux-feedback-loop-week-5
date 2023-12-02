import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feeling = (state = "", action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload
    }
    if (action.type === 'CLEAR_REDUCERS') {
        return ""
    }
    return state;
}

const understanding = (state = "", action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload
    }
    if (action.type === 'CLEAR_REDUCERS') {
        return ""
    }
    return state;
}

const support = (state = "", action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload
    }
    if (action.type === 'CLEAR_REDUCERS') {
        return ""
    }
    return state;
}

const comments = (state = "", action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload
    }
    if (action.type === 'CLEAR_REDUCERS') {
        return ""
    }
    return state;
}

const feedback = (state = [], action) => {
    if (action.type === 'SET_FEEDBACK') {
        return action.payload
    }
    return state;
}

const store = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments,
        feedback
    }),
    applyMiddleware(logger),
);

export default store;