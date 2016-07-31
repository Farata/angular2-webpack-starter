module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS', 'PhantomJS_custom'],
        frameworks: ['jasmine'],
        reporters: ['mocha'],
        singleRun: true,
        preprocessors: {'./karma-test-runner.js': ['webpack']},
        files: [
            {pattern: 'node_modules/babel-polyfill/browser.js', instrument: false},
            {pattern: './karma-test-runner.js', watched: false}
            ],
        webpack: require('./webpack.test.config.js'),
        webpackServer: {noInfo: true},
        customLaunchers: {
            'PhantomJS_custom': {
                base: 'PhantomJS',
                options: {
                    windowName: 'my-window',
                    settings: {
                        webSecurityEnabled: false
                    }
                },
                flags: ['--load-images=true'],
                debug: true
            }
        },
        phantomjsLauncher: {
            // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
            exitOnResourceError: true
        }
    });
};
