const fs = require('fs');
const { pathAuxiliaryDest } = require('../../config/paths');

const createFolder = () => {
  if (fs.existsSync(pathAuxiliaryDest)) {
    return false;
  } else {
    fs.mkdirSync(pathAuxiliaryDest);

    return true;
  }
};


module.exports = createFolder