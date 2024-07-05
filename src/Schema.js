import messages from './messages';

export const videoheroSchema = (props) => {
  const { intl } = props;

  return {
    title: 'Video Hero',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [
          'size',
          'textPosition',
          'textBG',
          'moreBelow',
        ],
      },
      {
        id: 'video',
        title: 'MP4 Videos Files',
        fields: [
          'video2kUrl',
          'videohdUrl',
          'mp4Url',
        ],
      },
      {
        id: 'text',
        title: 'Text',
        fields: [
          'preheadingText',
          'headingText',
          'headingColor',
          'subHeadingText',
        ],
      },
      {
        id: 'cta',
        title: 'Primary CTA',
        fields: [
          'cta1Title',
          'cta1Link',
        ],
      },
      {
        id: 'cta2',
        title: 'Secondary CTA',
        fields: [
          'cta2Title',
          'cta2Link',
        ],
      },
    ],
    properties: {
      preheadingText: {
        title: intl.formatMessage(messages.preheadingText),
        type: 'string',
      },
      headingText: {
        title: intl.formatMessage(messages.headingText),
        type: 'string',
      },
      subHeadingText: {
        title: intl.formatMessage(messages.subHeadingText),
        type: 'string',
        widget: 'textarea',
      },
      cta1Title: {
        title: intl.formatMessage(messages.cta1Title),
        type: 'string',
      },
      cta1Link: {
        title: intl.formatMessage(messages.cta1Link),
        type: 'string',
        widget: 'url',
      },
      cta2Title: {
        title: intl.formatMessage(messages.cta2Title),
        type: 'string',
      },
      cta2Link: {
        title: intl.formatMessage(messages.cta2Link),
        type: 'string',
        widget: 'url',
      },
      video2kUrl: {
        title: '2560w URL',
        description: intl.formatMessage(messages.video2kUrlDescription),
        type: 'string',
        widget: 'url',
      },
      videohdUrl: {
        title: '1280w URL',
        description: intl.formatMessage(messages.videohdUrlDescription),
        type: 'string',
        widget: 'url',
        required: true,
      },
      mp4Url: {
        title: '768w URL',
        description: intl.formatMessage(messages.mp4UrlDescription),
        type: 'string',
        widget: 'url',
        required: true,
      },
      textPosition: {
        title: intl.formatMessage(messages.textposition),
        widget: 'align',
        actions: ['left', 'center', 'right'],
        default: 'left',
      },
      size: {
        title: intl.formatMessage(messages.size),
        widget: 'align',
        actions: ['center', 'full'],
        default: 'center',
      },
      textBG: {
        title: intl.formatMessage(messages.textBackground),
        type: 'boolean',
        default: false,
      },
      moreBelow: {
        title: intl.formatMessage(messages.moreBelow),
        type: 'boolean',
        default: false,
      },
      headingColor: {
        title: intl.formatMessage(messages.headingColor),
        type: 'string',
        widget: 'color_picker',
        colors: [
          { name: 'primary', label: 'Primary' },
          { name: 'secondary', label: 'Secondary' },
          { name: 'tertiary', label: 'Tertiary' },
        ],
      },
    },
    required: [],
  };
};
