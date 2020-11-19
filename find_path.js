const chalk = require('chalk');
var fs = require('fs');
fs.readFile(process.cwd() + "//text.txt", function(err, data)
{
    if(err)
        console.log(err)
    else
        console.log(data.toString());
        console.log(chalk.keyword('orange')('Yay for orange colored text!'));
        console.log(chalk.keyword('orange')(data.toString()));
});