import { combineReducers } from 'redux';
import editMode from './ducks/editMode';

// Os nomes dos reducers devem ser os mesmos do arquivo initialState
const rootReducer = combineReducers({
  editMode,
});

export default rootReducer;
