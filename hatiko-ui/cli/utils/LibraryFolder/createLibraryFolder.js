const { srcDestLibary } = require('../../config/paths');
const createFolder = require('../Common/createFolder');

const createLibraryFolder = () => {
  const answer = createFolder(srcDestLibary);

  if (answer.status) {
    return true;
  } else {
    console.log(`Ошибка в создании папки, ${answer.error}`);
  }
};

module.exports = createLibraryFolder;