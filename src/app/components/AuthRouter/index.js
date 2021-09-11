import React from 'react';
import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../pages/Login/slice/selectors';

export const AuthRouter = props => {
  const loggedIn = useSelector(selectLoggedIn);
  const { accessible } = props;

  if (accessible === 'private' && !loggedIn) return <Redirect to="/login" />;

  return <Route {...props} />;
};
