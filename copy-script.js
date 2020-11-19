var gentlyCopy = require('gently-copy')
const chalk = require('chalk');
const log = console.log;

var fileList = ['App.vue', '../input/']
var dest = '../output/'
 
var currentPath = process.cwd();

// console.log(chalk.keyword('orange')(currentPath));
console.log(chalk.yellow(dest));
// console.log(chalk.magenta(__dirname));
// console.log(chalk.blue.bold(__filename));
// console.log(chalk.yellow(fileList.toString()));
console.log(chalk.keyword('orange')(fileList.toString()));


gentlyCopy(fileList, dest) // no overwriting (default)
gentlyCopy(fileList, dest, {overwrite: true}) // force overwriting