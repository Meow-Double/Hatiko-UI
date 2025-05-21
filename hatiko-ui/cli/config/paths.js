
const path = require('path');

const srcDir = path.join(__dirname, '..', '..', 'src');
const pathIconsDir = path.join(srcDir, 'icons');
const uncompountFolder = path.join(__dirname, '..', '..', 'src', 'uncompound');
const pathStylesDir = path.join(__dirname, '..', '..', 'src', 'styles');

const destDir = path.join(process.cwd(), 'hatiko-ui');
const pathComponentsDest = path.join(destDir, "components");
const pathIconsDest = path.join(destDir, "icons");
const pathStylesDest = path.join(destDir, 'styles');

module.exports = {
    srcDir,
    pathIconsDir,
    uncompountFolder,
    destDir,
    pathIconsDest,
    pathComponentsDest,

    pathStylesDir,
    pathStylesDest
}