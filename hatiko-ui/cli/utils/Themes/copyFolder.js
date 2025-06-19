const fsExtra = require('fs-extra');
const { pathAssetsThemesDest, pathAssetsThemesMain } = require('../../config/paths');
const path = require('path');

const createFolder = (name) => {
  const pathMainWithName = path.join(pathAssetsThemesMain, name);
  const pathDestWithName = path.join(pathAssetsThemesDest, name);
  fsExtra.copySync(pathMainWithName, pathDestWithName);
  console.log(`Тема ${name} была создана`)
};

module.exports = createFolder;