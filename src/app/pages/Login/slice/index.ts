import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { userSessionSaga } from './saga';
import { UserSessionState } from './types';

export const initialState: UserSessionState = {
  username: '',
  mail: '',
  loggedIn: false,
  image: '',
};

const slice = createSlice({
  name: 'userSession',
  initialState,
  reducers: {
    setUserLogin(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload;
    },
    setUserDetails(state, action: PayloadAction<any>) {
      state.username = action.payload.name;
      state.mail = action.payload.email;
      state.image = action.payload.imageUrl;
      state.loggedIn = true;
    },
    resetUserDetails(state) {
      state.username = '';
      state.mail = '';
      state.image = '';
      state.loggedIn = false;
    },
  },
});

export const { actions: userSessionActions, reducer } = slice;

export const useUserSessionSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: userSessionSaga });
  return { actions: slice.actions };
};
