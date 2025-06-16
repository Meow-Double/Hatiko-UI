



const { pathConfigTestsDest } = require('../../../config/paths');
const { componentTestsNeeded } = require('../../../config/tests');
const fs = require("fs");

const checkAndCopyFolder = (components) => {
    if(configFolder.isExisting(pathConfigTestsDest)){
        //Если папка есть вернётся false
        return false
    }
    if(configFolder.getCountTestsComponents(components) >= 1){
        fs.mkdirSync(pathConfigTestsDest);
        return true;
    }

    return false;
};


const configFolder = {

    isExisting: (pathFolder) => {
        if(fs.existsSync(pathFolder)) return true;

        return false
    },

    getCountTestsComponents:(components) => {
            let count = 0;

            componentTestsNeeded.forEach(testComponent => {
                if(components.includes(testComponent)) count++
            });

            return count;
    },
}




module.exports = checkAndCopyFolder