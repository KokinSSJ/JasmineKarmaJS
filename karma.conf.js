module.exports = function(config) { config.set({
    "basePath": "",
    "colors": true,
    "logLevel": "INFO",
    "files": [
        "jquery.js",
        "webapp/resources/**/*.js",
        "js-spec/**/*test.js"
    ],
    "browsers": [
        "PhantomJS"
    ],
    "frameworks": [
        "jasmine" 
    ],
    "reporters": [
        "progress"
    ],
    "preprocessors": {
        
    },
    "exclude": [
        
    ],
    "junitReporter": {
        "outputDir": "test-dir"
    },
    "concurency": "Infinity"
}) };