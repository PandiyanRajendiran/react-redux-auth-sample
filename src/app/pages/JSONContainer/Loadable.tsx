/**
 * Asynchronously loads the component for NotFoundPage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const JSONContainerPage = lazyLoad(
  () => import('./index'),
  module => module.JSONContainerPage,
  {
    fallback: <LoadingIndicator />,
  },
);
