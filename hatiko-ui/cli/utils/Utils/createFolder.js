const fs = require('fs');
const { pathUtilsDest } = require('../../config/paths');

const createFolder = () => {
  if (fs.existsSync(pathUtilsDest)) {
    return false;
  } else {
    fs.mkdirSync(pathUtilsDest);

    return true;
  }
};

module.exports = createFolder;