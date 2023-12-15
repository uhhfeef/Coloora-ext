const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    background: './src/background.js',
    popup: './src/popup.js',

    // Add all programmatically injected content scripts to bundle them here
    eyedropper: './src/cs/eyedropper.js',
    palette: './src/cs/palette.js',
    gradient: './src/cs/gradient.js',
    colorwheel: './src/cs/colorWheel.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js', // Output each entry point to its own file
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // Add more loaders as needed (e.g., for CSS or images)
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '.' }, 
        { from: 'src/popup.html', to: 'popup.html' }, // Copy popup.html to dist/popup.html
        { from: 'src/assets', to: 'assets' }, // Copy assets to dist/assets
        { from: 'src/styles', to: 'styles' },
        { from: 'src/modules', to: 'modules' },
      ],
    }),
  ],
  // Optional: Enable source maps for debugging
  devtool: 'source-map',
  // mode: 'development',
};
