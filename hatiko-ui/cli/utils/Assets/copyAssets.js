const path = require('path');
const fsExtra = require('fs-extra');
const fs = require('fs');
const { pathAssetsMain, pathAssetsDest } = require('../../config/paths');




const copyComponents = () => {
    fsExtra.copySync(pathAssetsMain, pathAssetsDest);

    return console.log(`Assets были созданы`);
};

module.exports = copyComponents;