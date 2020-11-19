var gentlyCopy = require('gently-copy')
 
var fileList = ['App.vue', '../input/src']
var dest = '../output/src'
 
fs.readFile(path.resolve(__dirname, 'settings.json'), 'UTF-8', callback);
process.cwd
__filename 
__dirname 

gentlyCopy(fileList, dest) // no overwriting (default)
gentlyCopy(fileList, dest, {overwrite: true}) // force overwriting