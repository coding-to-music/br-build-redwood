const chalk = require('chalk');
var exec = require('child_process').exec, child;

child = exec('ls ../input/src',
    function (error, stdout, stderr) {
        console.log(chalk.keyword('orange')(stdout));
        // console.log('stdout: ' + stdout);
        // console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });

// child();
