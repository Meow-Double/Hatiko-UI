const path = require("path");
const fsExtra = require("fs-extra")
const fs = require("fs")
const { pathIconsDir, pathIconsDest } = require("../config/paths");




const createIcons = (icons) => {

 fs.mkdirSync(pathIconsDest);

 icons.forEach(icon => {
       
       const pathIconDir = path.join(pathIconsDir, `${icon}.tsx`)
        const pathIconDest = path.join(pathIconsDest, `${icon}.tsx`);

        if(fs.existsSync(pathIconDest)){
            return console.log(`Иконка ${icon} уже существует`);
        }

        fsExtra.copySync(pathIconDir, pathIconDest);

        return console.log(`Иконка ${icon} была создана`)
    });
}


module.exports = createIcons