import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { initialState } from './ducks/editMode';
import rootReducer from './reducer';

const initStore = (state) => {
  const store = createStore(
    rootReducer,
    state,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(require('./reducer').default);
    });
  }

  return store;
};

export default initStore;
