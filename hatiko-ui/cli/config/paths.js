const path = require('path');

// dir - directory
// main - project paths 
// dest - installation source

const srcMainDir = path.join(__dirname, "..", "..", "src");
const srcMainLibrary = path.join(srcMainDir, 'hatiko-ui');

const pathIconMain = path.join(srcMainLibrary, 'icons');
const pathUncompoundMain = path.join(srcMainLibrary, 'uncompound');
const pathCompoundMain = path.join(srcMainLibrary, 'comnpound');
const pathAuxiliaryMain = path.join(srcMainLibrary, 'auxiliary');
const pathUtilsMain = path.join(srcMainLibrary, 'utils');
const pathConfigMain = path.join(srcMainLibrary, 'config');
const pathAssetsMain = path.join(srcMainLibrary, 'assets');

// -------------------------------------------------
const srcDestDir = path.join(process.cwd(), 'src');
const srcDestLibary = path.join(srcDestDir, 'hatiko-ui');

const pathIconDest = path.join(srcDestLibary, 'icons');
const pathUncompoundDest = path.join(srcDestLibary, 'uncompound');
const pathCompoundDest = path.join(srcDestLibary, 'comnpound');
const pathAuxiliaryDest = path.join(srcDestLibary, 'auxiliary');
const pathUtilsDest = path.join(srcDestLibary, 'utils');
const pathConfigDest = path.join(srcDestLibary, 'config');
const pathAssetsDest = path.join(srcDestLibary, 'assets');

module.exports = {
srcMainDir,
pathIconMain,
pathUncompoundMain,
pathCompoundMain,
pathAuxiliaryMain,
pathUtilsMain,
pathConfigMain,
pathAssetsMain,
srcDestDir,
srcDestLibary,
pathIconDest,
pathUncompoundDest,
pathCompoundDest,
pathAuxiliaryDest,
pathUtilsDest,
pathConfigDest,
pathAssetsDest,
}