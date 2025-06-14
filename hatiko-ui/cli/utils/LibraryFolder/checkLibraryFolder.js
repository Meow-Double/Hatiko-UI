const fs = require('fs');
const { srcDestLibary } = require('../../config/paths');

// Checking the library main folder on the user side

const checkLibraryFolder = () => {
  if (!fs.existsSync(srcDestLibary)) {
    return console.log('Отсуствует hatiko-ui папка, создаём её...');
  }

  return true;
};

module.exports = checkLibraryFolder;