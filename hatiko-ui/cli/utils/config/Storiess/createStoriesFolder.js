const { pathConfigStorybookDest } = require('../../../config/paths');
const createFolder = require('../../Common/createFolder');

const createStoriesFolder = () => {
  const answer = createFolder(pathConfigStorybookDest);

  if (answer.status) {
    return true;
  } else {
    console.log(`Ошибка в создании папки, ${answer.error}`);
  }
};

module.exports = createStoriesFolder;