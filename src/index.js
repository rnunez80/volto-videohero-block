import React from 'react';
import loadable from '@loadable/component';
import iconSVG from '@plone/volto/icons/video.svg';
import { Loader } from 'semantic-ui-react';

// Use @loadable/component to dynamically import the components
const View = loadable(() => import('./View'), {
  fallback: (
    <div>
      <Loader active inline='centered' />
      <p>Loading...</p>
    </div>
  ),
});

const Edit = loadable(() => import('./Edit'), {
  fallback: (
    <div>
      <Loader active inline='centered' />
      <p>Loading...</p>
    </div>
  ),
});

const applyConfig = (config) => {
  config.blocks.blocksConfig.videohero = {
    id: 'videohero',
    title: 'Video Hero',
    icon: iconSVG,
    group: 'common',
    view: View,
    edit: Edit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  };
  return config;
};

export default applyConfig;
