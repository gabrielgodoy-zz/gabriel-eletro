import { Reducer } from 'redux';

const defaultState: PersistState = {
  userInfo: null,
};
export const reducer: Reducer<PersistState> = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.SAVE_USER_INFO:
      return {
        ...state,
        userInfo: payload,
      };
    default:
      return state;
  }
};

enum ActionTypes {
  SAVE_USER_INFO = 'save user information',
}

export function saveUserInfo(userInfo) {
  return {
    payload: userInfo,
    type: ActionTypes.SAVE_USER_INFO,
  };
}

export interface PersistState {
  userInfo: any;
}
