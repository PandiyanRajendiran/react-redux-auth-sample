import * as React from 'react';
import styled from 'styled-components/macro';
import { NavBar } from 'app/components/AppBar';
import { Helmet } from 'react-helmet-async';
import { StyleConstants } from 'styles/StyleConstants';
import { useSelector } from 'react-redux';
import {
  selectMail,
  selectUserName,
  selectUserImage,
} from '../../pages/Login/slice/selectors';
import { Avatar, Typography } from '@material-ui/core';

export function MyAccountPage() {
  const mail = useSelector(selectMail);
  const name = useSelector(selectUserName);
  const image = useSelector(selectUserImage);

  return (
    <>
      <Helmet>
        <title>My account</title>
        <meta name="description" content="My Account Page" />
      </Helmet>
      <NavBar />
      <Wrapper>
        <Avatar style={{ width: '200px', height: '200px' }} src={image} />
        <Typography variant="h2">{name}</Typography>
        <Typography variant="h4">{mail}</Typography>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;
