/**
 *
 * Asynchronously loads the component for HomeScreen
 *
 */

import React from 'react';
import loadable from 'utils/loadable';
import ActivityIndicator from 'components/ActivityIndicator';

export default loadable(() => import('./index'), {
  fallback: <ActivityIndicator />,
});
