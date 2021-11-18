import { combineReducers } from 'redux' ; 
import { reducerForNotes } from '../reduxReducers/reducerNotes';

const reducers = combineReducers({
  allNotes: reducerForNotes,
});

export default reducers;