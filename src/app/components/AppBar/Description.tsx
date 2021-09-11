import * as React from 'react';
import styled from 'styled-components/macro';

export function Description() {
  return (
    <Wrapper>
      <Title>React-Redux-Router Sample</Title>
      <SubTitle>Cyber Security Works Assignment</SubTitle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Title = styled.div`
  font-size: 1.25rem;
  color: ${p => p.theme.text};
  font-weight: bold;
  margin-right: 1rem;
`;

const SubTitle = styled.div`
  font-size: 0.875rem;
  color: ${p => p.theme.textSecondary};
  font-weight: normal;
`;
