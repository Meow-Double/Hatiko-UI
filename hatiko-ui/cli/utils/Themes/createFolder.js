const fs = require('fs');
const { pathAssetsThemesDest } = require('../../config/paths');

const createFolder = () => {
  if (fs.existsSync(pathAssetsThemesDest)) {
    return true;
  } else {
    fs.mkdirSync(pathAssetsThemesDest);

    return true;
  }
};

module.exports = createFolder;