export const initialState = true;

export const actionTypes = {
  EDIT_OFF: 'EDIT_OFF',
  EDIT_ON: 'EDIT_ON',
};

// REDUCERS
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.EDIT_ON:
      return true;

    case actionTypes.EDIT_OFF:
      return false;

    default:
      return state;
  }
}

// ACTIONS
export const enableEditMode = () => (dispatch) => {
  return dispatch({ type: actionTypes.EDIT_ON });
};

export const disableEditMode = () => (dispatch) => {
  return dispatch({ type: actionTypes.EDIT_OFF });
};
