/**
 * Asynchronously loads the component for NotFoundPage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const IPLTablePage = lazyLoad(
  () => import('./index'),
  module => module.IPLTablePage,
  {
    fallback: <LoadingIndicator />,
  },
);
