






const fsExtra = require('fs-extra');
const { pathConfigStorybookDest, pathConfigStorybookMain } = require('../../../config/paths');

const copyFolder = () => {
    fsExtra.copySync(pathConfigStorybookMain, pathConfigStorybookDest);
}



module.exports = copyFolder