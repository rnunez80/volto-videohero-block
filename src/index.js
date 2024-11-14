import React, { Suspense } from 'react';
import iconSVG from '@plone/volto/icons/video.svg';

// Use React.lazy to dynamically import the components
const View = React.lazy(() => import('./View'));
const Edit = React.lazy(() => import('./Edit'));

const applyConfig = (config) => {
  config.blocks.blocksConfig.videohero = {
    id: 'videohero',
    title: 'Video Hero',
    icon: iconSVG,
    group: 'common',
    view: (props) => (
      <Suspense fallback={<div>Loading...</div>}>
        <View {...props} />
      </Suspense>
    ),
    edit: (props) => (
      <Suspense fallback={<div>Loading...</div>}>
        <Edit {...props} />
      </Suspense>
    ),
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
  };
  return config;
};

export default applyConfig;
