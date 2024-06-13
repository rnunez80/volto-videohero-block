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
        title: 'Preheading',
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
        title: 'Text',
        type: 'string',
      },
      cta1Link: {
        title: 'Link',
        type: 'string',
        widget: 'url',
      },
      cta2Title: {
        title: 'Text',
        type: 'string',
      },
      cta2Link: {
        title: 'Link',
        type: 'string',
        widget: 'url',
      },
      video2kUrl: {
        title: '2560w URL',
        description: '2560x1440 recommended. Ensures high quality on large desktop monitors, including high-resolution screens.',
        type: 'string',
        widget: 'url',
      },
      videohdUrl: {
        title: '1280w URL',
        description: '1280x720 recommended. A standard HD resolution that provides good quality for a wide range of devices, including tablets like iPads in landscape mode and smaller laptops.',
        type: 'string',
        widget: 'url',
        required: true,
      },
      mp4Url: {
        title: '768w URL',
        description: '768x432 recommended. Suitable for many mobile devices and tablets in portrait mode.',
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
        title: 'Video Size',
        widget: 'align',
        actions: ['center', 'full'],
        default: 'center',
      },
      textBG: {
        title: 'Use Background on Text',
        type: 'boolean',
        default: false,
      },
      moreBelow: {
        title: 'Show "More Below" Icon',
        type: 'boolean',
        default: false,
      },
    },
    required: [],
  };
};
