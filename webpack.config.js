const path = require( "path"  );
const ExtractTextPlugin = require( "extract-text-webpack-plugin" );

module.exports = {

  mode: "development",

  entry:  [ './lib/js/entry.js', './lib/sass/entry.scss'  ],

  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, 'release'),
  },
  module:{
    rules:[
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 'css-loader', 'sass-loader' ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'css/app.css',
    }),
  ],


};
