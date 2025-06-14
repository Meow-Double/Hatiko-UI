const { pathConfigDest } = require('../../../config/paths');
const createFolder = require('../../Common/createFolder');

const createConfigFolder = () => {
  const answer = createFolder(pathConfigDest);

  if (answer.status) {
    return true;
  } else {
    console.log(`Ошибка в создании Config папки, ${answer.error}`);
    return true;
  }
};

module.exports = createConfigFolder;