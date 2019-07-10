const glob = require('glob');

const requires = [
  'src/**/emptyfile.js',
  'src/**/emptyfeature.feature',
];

const findFilesPath = async (currentGlob) => {
  return new Promise((resolve, reject) => {
    glob(currentGlob, (error, files) => {
      if (error) reject(error);
      resolve(files);
    })
  });
};


async function printFilePath() {
  const filePath = [];
  for (let i = 0; i < requires.length; i +=1 ) {
    filePath.push(...await findFilesPath(requires[i]));
  }
  console.log(filePath);
}

printFilePath();