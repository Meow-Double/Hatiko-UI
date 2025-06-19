const fsExtra = require('fs-extra');
const { pathUtilsDest, pathUtilsMain } = require('../../config/paths');

const createFolder = () => {
  fsExtra.copySync(pathUtilsMain, pathUtilsDest);
};

module.exports = createFolder;