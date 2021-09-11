import * as React from 'react';
import styled from 'styled-components/macro';
import { Description } from './Description';
import { StyleConstants } from 'styles/StyleConstants';
import { User } from './User';
import { Links } from './Links';
import { PageWrapper } from '../PageWrapper';

export function NavBar() {
  return (
    <Wrapper>
      <PageWrapper>
        <Description />
        <Links />
        <User />
      </PageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${p => p.theme.background};
  z-index: 2;

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background-color: ${p =>
      p.theme.background.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.75)',
      )};
  }

  ${PageWrapper} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
