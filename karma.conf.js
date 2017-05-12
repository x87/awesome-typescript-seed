const webpackConfig = require('./webpack.config.js');
webpackConfig.devtool = 'inline-source-map';

webpackConfig.entry = function () {
    return {};
};

webpackConfig.output = {};

module.exports = function (config) {
    config.set({

        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'webpack.test.js'
        ],
        browsers: ['PhantomJS'],
        webpack: webpackConfig,
        webpackMiddleware: {
            quiet: true,
            stats: 'errors-only'
        },
        preprocessors: {
            'webpack.test.js': ['webpack', 'sourcemap']
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        singleRun: true
    });
};
