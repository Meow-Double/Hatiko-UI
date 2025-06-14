
const { pathUncompoundDest } = require('../../config/paths');
const createFolder = require('../Common/createFolder');

const createCompoundFolder = () => {
  const answer = createFolder(pathUncompoundDest);

  if (answer.status) {
    return true;
  } else {
    console.log(`Ошибка в создании Uncompound папки, ${answer.error}`);
    return true
  }
};

module.exports = createCompoundFolder