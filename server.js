const webpack = require('webpack');
const config = require('./webpack.config.dev');
const WebpackDevServer = require('webpack-dev-server');

const server = new WebpackDevServer(webpack(config), {
  contentBase: './app',
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  disableHostCheck: true,
});

server.listen(process.env.PORT || 5000, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Listening at localhost: ${process.env.PORT || 5000}`);
});
