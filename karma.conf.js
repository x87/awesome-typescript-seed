const webpackConfig = require('./webpack-test.config');

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
        reporters: ['progress', 'coverage'],
        port: 9876,
        colors: true,
        singleRun: false
    });
};
