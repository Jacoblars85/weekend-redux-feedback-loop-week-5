import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';


const feeling = (state = "", action) => {
    if (action.type === '') {
      return action.payload
  }
    return state;
  }

  const understanding = (state = "", action) => {
    if (action.type === '') {
      return action.payload
  }
    return state;
  }

  const support = (state = "", action) => {
    if (action.type === '') {
      return action.payload
  }
    return state;
  }

  const comments = (state = "", action) => {
    if (action.type === '') {
      return action.payload
  }
    return state;
  }

const store = createStore(
    combineReducers({
      feeling,
      understanding,
      support,
      comments
    }),
    applyMiddleware(logger),
  );
  
  
  export default store;