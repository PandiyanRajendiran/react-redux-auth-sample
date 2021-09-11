import React from 'react';
import { GoogleLogin } from 'react-google-login';

export const GoogleAuth = ({ onSuccess, onFailure }) => {
  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_SECRET_CODE}
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
};
