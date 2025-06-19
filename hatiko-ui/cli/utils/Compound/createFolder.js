const fs = require('fs');
const { pathCompoundDest } = require('../../config/paths');

const createFolder = () => {
  if (fs.existsSync(pathCompoundDest)) {
    return false;
  } else {
    fs.mkdirSync(pathCompoundDest);

    return true;
  }
};

module.exports = createFolder;