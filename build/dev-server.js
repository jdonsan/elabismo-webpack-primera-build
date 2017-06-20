const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevConf = require('./webpack.dev.conf');
const app = require("express")();

const compiler = webpack(webpackDevConf);

app.use(webpackDevMiddleware(compiler, {
    publicPath: '/',
    quiet: true
}));

app.use(webpackHotMiddleware(compiler));

app.listen(3000, function () {
    console.log("Listening on port 3000!");
});