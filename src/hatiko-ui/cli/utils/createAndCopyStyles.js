const path = require("path");
const fsExtra = require("fs-extra")
const fs = require("fs")
const {pathStylesDest, pathStylesDir} = require("../config/paths");


const createAndCopyStyles = () => {
    if(fs.existsSync(pathStylesDest)){
        return console.log("стили уже имеются")
    }

    fsExtra.copySync(pathStylesDir,pathStylesDest );

    return console.log("Стили были созданы")

}



module.exports = createAndCopyStyles;