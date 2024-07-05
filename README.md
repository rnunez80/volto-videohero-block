
# volto-videohero-block

## Overview

The `volto-videohero-block` is a custom Volto add-on that provides a "Video Hero" block. This block allows you to create a hero section with a video background, an image fallback, a title, description, and two call-to-action buttons.

## Features

- MP4 Video background (upload of 768w,1280w,2560w for performance)
- Video width can be content or full width/height
- Two customizable call-to-action buttons (primary and secondary)
- Configurable text alignment (left, center, right)
- Support for pre-heading and subheading
- Option to show heading text in 3 colors
- Option to add background to text
- Option to show "more below" icon

## Installation

1. Install the add-on in your Volto project:

```bash
npm install volto-videohero-block
```

## Schema

The schema for the `videoheroSchema` includes the following fields:

- `video2kUrl`: 2560x1440 recommended. Ensures high quality on large desktop monitors, including high-resolution
  screens. (URL)
- `videohdUrl`: 1280x720 recommended. A standard HD resolution that provides good quality for a wide range of devices,
  including tablets like iPads in landscape mode and smaller laptops. (URL)
- `mp4Url`: 768x432 recommended. Suitable for many mobile devices and tablets in portrait mode. (URL)
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

[![Watch the video](https://img.youtube.com/vi/M4VBHFvEiqw/maxresdefault.jpg)](https://youtu.be/M4VBHFvEiqw)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
