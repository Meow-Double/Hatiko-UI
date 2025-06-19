const fsExtra = require('fs-extra');
const { pathAuxiliaryMain, pathAuxiliaryDest } = require('../../config/paths');

const createFolder = () => {
  fsExtra.copySync(pathAuxiliaryMain, pathAuxiliaryDest);
};

module.exports = createFolder;