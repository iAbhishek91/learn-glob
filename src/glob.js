const glob = require('glob');

glob('src/**/emptyfile.js', (error, files) => {
  if(error) console.log(error);

  console.log(...files);
});