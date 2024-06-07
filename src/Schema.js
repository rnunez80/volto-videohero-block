export const videoheroSchema = (props) => {
  const { intl } = props;

  return {
    title: 'Video Hero',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [
          'webmUrl',
          'mp4Url',
          'imageUrl',
          'size',
          'preheadingText',
          'headingText',
          'subHeadingText',
          'textPosition',
          'textBG',
          'cta1Title',
          'cta1Link',
          'cta2Title',
          'cta2Link',
          'moreBelow',
        ],
      },
    ],
    properties: {
      preheadingText: {
        title: 'pre-heading',
        type: 'string',
      },
      headingText: {
        title: 'Heading',
        type: 'string',
      },
      subHeadingText: {
        title: 'Subheading',
        type: 'string',
        widget: 'textarea',
      },
      cta1Title: {
        title: 'Primary CTA text',
        type: 'string',
      },
      cta1Link: {
        title: 'Primary CTA Link',
        type: 'string',
        widget: 'url',
      },
      cta2Title: {
        title: 'Secondary CTA text',
        type: 'string',
      },
      cta2Link: {
        title: 'Secondary CTA Link',
        type: 'string',
        widget: 'url',
      },
      webmUrl: {
        title: 'WebM URL',
        description: 'WebM video are recommended, better quality and smaller size',
        type: 'string',
        widget: 'url',
      },
      mp4Url: {
        title: 'MP4 URL',
        description: 'MP4 video are required to Safari compatibility',
        type: 'string',
        widget: 'url',
        required: true,
      },
      imageUrl: {
        title: 'Image URL',
        description: 'Image to show on low speed connections',
        type: 'string',
        widget: 'url',
        required: true,
      },
      textPosition: {
        title: 'Text Position',
        widget: 'align',
        actions: ['left', 'center', 'right'],
        default: 'left',
      },
      size: {
        title: 'Size',
        widget: 'align',
        actions: ['center', 'full'],
        default: 'center',
      },
      textBG: {
        title: 'Use Background on Text',
        type: 'boolean',
        default: true,
      },
      moreBelow: {
        title: 'show more below icon',
        type: 'boolean',
        default: false,
      },
    },
    required: [],
  };
};
