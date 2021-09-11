import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageWrapper } from 'app/components/PageWrapper';
import { Link } from '../../components/Link';
import { Button } from '@material-ui/core';
import { Pages } from '../../../data';
import { NavBar } from 'app/components/AppBar';
import { IndexLinkWrapper } from './components/IndexLinkWrapper';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Index Page</title>
        <meta
          name="description"
          content="A ReactRedux application with login"
        />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <IndexLinkWrapper>
          {Pages.map(page => {
            return (
              <Link key={page.path} to={page.path}>
                <Button color="inherit">{page.displaText}</Button>
              </Link>
            );
          })}
        </IndexLinkWrapper>
      </PageWrapper>
    </>
  );
}
