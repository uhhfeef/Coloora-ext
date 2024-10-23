# Coloora Chrome Extension

## Description

Coloora is a powerful Chrome extension that provides a suite of color-related tools for designers, developers, and anyone working with colors. It offers features such as a color wheel, color palette generator, custom palette creator, and gradient generator.

## Features

- **Color Wheel**: Interactive color wheel for selecting and exploring colors
- **Generate Color Palette**: Automatically generate harmonious color palettes
- **Create Custom Palette**: Build and save your own color palettes
- **Create Gradient**: Design custom gradients with multiple color stops
- **Eyedropper Tool**: Pick colors from any webpage
- **Image Color Analysis**: Extract color palettes from uploaded images

## Installation

1. Clone this repository or download the source code.
2. Navigate to the project directory and run `npm install` to install dependencies.
3. Run `npm run watch` to build the extension and watch for changes.
4. Open Google Chrome and go to `chrome://extensions/`.
5. Enable "Developer mode" in the top right corner.
6. Click "Load unpacked" and select the `dist` folder from the project directory.

## Usage

After installation, click on the Coloora icon in your Chrome toolbar to open the popup menu. From there, you can access the following tools:

- Color Wheel
- Generate Color Palette
- Create Custom Palette
- Create Gradient

Each tool will open in a new overlay on the current webpage.

## Development

This project uses Webpack for bundling and Babel for transpiling. The main configuration file is `webpack.config.js`.

### Project Structure

- `src/`: Source files
  - `background.js`: Background script
  - `popup.js`: Popup script
  - `popup.html`: Popup HTML
  - `cs/`: Content scripts
    - `colorWheel.js`
    - `eyedropper.js`
    - `gradient.js`
    - `palette.js`
  - `styles/`: CSS files
- `public/`: Public assets
- `dist/`: Built files (generated)

### Commands

- `npm run watch`: Build the extension and watch for changes
- `npm test`: Run tests (currently not implemented)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Feedback and Feature Requests

We value your input! If you have any feedback or feature requests, please use the following links:

- [Feature Request Form](https://forms.gle/7Zx5mo4GzoXpVXS18)
- [Join our Discord](https://forms.gle/Dz9ba5BU8robBk1q9)

## License

This project is licensed under the ISC License.

## Version

Current version: 1.0.7 (Check `public/manifest.json` for the latest version)

## Contact

For any inquiries, please join our Discord community.