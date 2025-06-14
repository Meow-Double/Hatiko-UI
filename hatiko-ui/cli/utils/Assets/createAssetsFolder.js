
const { pathAssetsDest } = require('../../config/paths');
const createFolder = require('../Common/createFolder');

const createCompoundFolder = () => {
  const answer = createFolder(pathAssetsDest);

  if (answer.status) {
    return true;
  } else {
    console.log(`Ошибка в создании Assets папки, ${answer.error}`);
    return false
  }
};

module.exports = createCompoundFolder

