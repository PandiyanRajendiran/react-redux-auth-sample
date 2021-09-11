import * as React from 'react';
import styled from 'styled-components/macro';
import { Pages } from '../../../data';
import { Link } from '../Link';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../pages/Login/slice/selectors';

export function Links() {
  const loggedIn = useSelector(selectLoggedIn);
  let links = [...Pages];

  if (loggedIn) {
    links.splice(links.length - 1, 1);
  }
  return (
    <Wrapper>
      {links.map(page => {
        return (
          <Link key={page.path} to={page.path}>
            <Button color="inherit">{page.displaText}</Button>
          </Link>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: start;
`;
