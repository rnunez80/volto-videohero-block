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
          'cta1Title',
          'cta1Link',
          'cta2Title',
          'cta2Link',
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
        type: 'string',
        widget: 'url',
      },
      mp4Url: {
        title: 'MP4 URL',
        type: 'string',
        widget: 'url',
        required: true,
      },
      imageUrl: {
        title: 'Image URL',
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
    },
    required: [],
  };
};
