import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.userSession || initialState;

export const selectUserName = createSelector(
  [selectDomain],
  userSessionState => userSessionState.username,
);

export const selectUserImage = createSelector(
  [selectDomain],
  userSessionState => userSessionState.image,
);

export const selectLoggedIn = createSelector(
  [selectDomain],
  userSessionState => userSessionState.loggedIn,
);

export const selectMail = createSelector(
  [selectDomain],
  userSessionState => userSessionState.mail,
);
