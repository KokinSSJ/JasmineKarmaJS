module.exports = function(config) { 
function mergeFilesWithArgv(staticFiles) {

    var source = staticFiles, argv = process.argv;

    argv.forEach(function (arg) {
        var index = arg.indexOf('--check=');
		if(index !== -1) {
			var elements = arg.split('--check=');
			elements.forEach(function(element) {
			 if(element !== "") {
				 source.push(element);
			 }
			});
		}    
    });  
	console.log(source);
    return source;

}


config.set({
    "basePath": "",
    "colors": true,
    "logLevel": "INFO",
    "files": mergeFilesWithArgv([
        "jquery.js",
        "webapp/resources/**/*.js",
        "js-spec/**/*test.js"
    ]),
    "browsers": [
        "PhantomJS"
    ],
    "frameworks": [
        "jasmine" 
    ],
    "reporters": [
        "junit",
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