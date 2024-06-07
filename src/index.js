import iconSVG from '@plone/volto/icons/video.svg';
import View from './View';
import Edit from './Edit';


const applyConfig = (config) => {
  config.blocks.blocksConfig.videohero = {
    id: 'videohero',
    title: 'Video Hero',
    icon: iconSVG,
    group: 'common',
    view: View,
    edit: Edit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
  };
  return config;
};

export default applyConfig;

