/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from '../styles/global-styles';
import { HomePage } from './pages/HomePage/Loadable';
import { useTranslation } from 'react-i18next';
import { AuthRouter } from './components/AuthRouter';
import { Pages } from '../data';

import { IdleWatcher } from './components/IdleWatcher';

export function App() {
  const { i18n } = useTranslation();
  const ActivePages = Pages.filter(({ disabled }) => !disabled);
  

  const routes = ActivePages.map(page => (
    <AuthRouter key={page.path} {...page} />
  ));

  return (
    <BrowserRouter>
      <IdleWatcher />
      <Helmet
        titleTemplate="%s - React cybersecurity assigment"
        defaultTitle="React cybersecurity assigment"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="React cybersecurity assigment" />
      </Helmet>
      <Switch>
        {routes}
        <Route exact path="/" component={HomePage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
