const { pathIconDest } = require('../../config/paths');
const createFolder = require('../Common/createFolder');

const createIconsFolder = () => {
  const answer = createFolder(pathIconDest);

  if (answer.status) {
    return true;
  } else {
    console.log(`Ошибка в создании Icons папки, ${answer.error}`);
    return true
  }
};

module.exports = createIconsFolder