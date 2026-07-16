import React from 'react';
import iconSVG from '@plone/volto/icons/video.svg';
import { applyStyleWrapperToBlock } from '@eeacms/volto-block-style';

import View from './View';
import Edit from './Edit';

const applyConfig = (config) => {
  config.blocks.blocksConfig.videohero = {
    id: 'videohero',
    title: 'Video Hero',
    icon: iconSVG,
    group: 'media',
    view: View,
    edit: Edit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  };

  config.blocks.blocksConfig.videohero = applyStyleWrapperToBlock(
    config.blocks.blocksConfig.videohero,
  );

  return config;
};

export default applyConfig;
