
# volto-videohero-block

## Overview

The `volto-videohero-block` is a custom Volto add-on that provides a "Video Hero" block. This block allows you to create a hero section with a video background, an image fallback, a title, description, and two call-to-action buttons.

## Features

- Video background support (WebM and MP4)
- Image fallback for video (for low-speed connections)
- content wide or full width/hight
- Two customizable call-to-action buttons
- Configurable text alignment
- Support for pre-heading and subheading
- Option to add background to text
- Option to show "more below" icon

## Installation

1. Install the add-on in your Volto project:

```bash
npm install volto-videohero-block
```

## Schema

The schema for the `videoheroSchema` includes the following fields:

- `webmUrl`: WebM video URL (recommended for better quality and smaller size)
- `mp4Url`: MP4 video URL (required for Safari compatibility)
- `imageUrl`: Image URL (to show on low-speed connections)
- `size`: Size of the block (center or full)
- `preheadingText`: Pre-heading text
- `headingText`: Heading text
- `subHeadingText`: Subheading text
- `textPosition`: Text position (left, center, right)
- `textBG`: Use background on text (boolean)
- `cta1Title`: Primary CTA text
- `cta1Link`: Primary CTA link (URL)
- `cta2Title`: Secondary CTA text
- `cta2Link`: Secondary CTA link (URL)
- `moreBelow`: Show "more below" icon (boolean)

## Usage

To use the Video Hero block in your Volto project, add it to the available blocks in your Volto configuration and
include the necessary properties.

Example configuration:

```javascript
import { videoheroSchema } from './Schema';

const customBlocks = {
  ...existingBlocks,
  videohero: {
    id: 'videohero',
    title: 'Video Hero',
    icon: videoIcon,
    group: 'common',
    view: View,
    edit: Edit,
    schema: videoheroSchema,
  },
};

export default customBlocks;
```

## Example

Here's an example of how you can use the Video Hero block in your project:

```jsx
import React from 'react';
import { View } from './View';
import { videoheroSchema } from './Schema';

const VideoHeroExample = () => (
  <View
    data={{
      webmUrl: 'https://example.com/video.webm',
      mp4Url: 'https://example.com/video.mp4',
      imageUrl: 'https://example.com/image.jpg',
      preheadingText: 'Welcome to',
      headingText: 'Our Site',
      subHeadingText: 'We are glad to see you here',
      cta1Title: 'Learn More',
      cta1Link: 'https://example.com/learn-more',
      cta2Title: 'Get Started',
      cta2Link: 'https://example.com/get-started',
      textPosition: 'center',
      size: 'full',
      textBG: true,
      moreBelow: false,
    }}
  />
);

export default VideoHeroExample;
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
