import * as React from 'react';
import styled from 'styled-components/macro';
import { NavBar } from 'app/components/AppBar';
import { Helmet } from 'react-helmet-async';
import { StyleConstants } from 'styles/StyleConstants';
import { IPLSchedule } from '../../../data';

export function JSONContainerPage() {
  return (
    <>
      <Helmet>
        <title>JSON Container</title>
        <meta name="description" content="JSON Container" />
      </Helmet>
      <NavBar />
      <Wrapper>{JSON.stringify(IPLSchedule)}</Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  width: 960px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;
