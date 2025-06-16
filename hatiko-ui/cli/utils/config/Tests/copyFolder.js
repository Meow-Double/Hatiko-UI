




const fsExtra = require('fs-extra');
const { pathConfigTestsDest, pathConfigTestsMain } = require('../../../config/paths');

const copyFolder = () => {
    fsExtra.copySync(pathConfigTestsMain, pathConfigTestsDest);
}



module.exports = copyFolder