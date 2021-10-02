const HtmlWebpackPlugin = require('html-webpack-plugin'),
  fs = require('fs'),
  path = require('path'),
  viewsFolder = path.resolve(__dirname, '../src/views/pages')

exports.pages = ()=> {

  var pages = []

  fs.readdirSync(viewsFolder).forEach(view => {
    const viewName = view.split('.')[0];

    const options = {
      filename: `${viewName}.html`,
      template: `views/pages/${view}`,
      inject: true,
      hash: true,
      minify: {
        html5: true,
        removeComments: true,
        collapseWhitespace: false
      }
    };

    pages.push(new HtmlWebpackPlugin(options));
  })

  return pages;
}
