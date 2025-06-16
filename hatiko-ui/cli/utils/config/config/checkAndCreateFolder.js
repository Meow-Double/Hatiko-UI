const { pathConfigDest } = require('../../../config/paths');
const createConfigFolder = require('./createConfigFolder');
const fs = require('fs');


const checkCreateFolder = () => {
  if (!fs.existsSync(pathConfigDest)) {
    createConfigFolder()
  }
};

module.exports = checkCreateFolder;