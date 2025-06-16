
const { pathConfigDest } = require('../../../config/paths');
const fs = require('fs');

const {
  componentWithDecorators,
  componentWithStyles,
  componentsWithImages
} = require('../../../config/stories');
const {componentTestsNeeded} = require("../../../config/tests")

// Проверить есть ли папка

const checkAndcreateConfigFolder = (components) => {
    if(configFolder.isExisting(pathConfigDest)){
        return true;
    }
    if(configFolder.getCountConfigComponents(components) >= 1){
        fs.mkdirSync(pathConfigDest);

        return true
    }


    return false
};



const configFolder = {

    isExisting: (pathFolder) => {
        if(fs.existsSync(pathFolder)) return true;

        return false
    },

    createConfigComponentsSet: () => {
        const configComponentsSet = new Set();
    
        const allArrayComponents = [...componentWithDecorators, ...componentWithStyles, ...componentsWithImages, ...componentTestsNeeded]
       
        allArrayComponents.forEach(component => configComponentsSet.add(component))
        return configComponentsSet;
    },

    getCountConfigComponents:(components) => {
            const configComponents = configFolder.createConfigComponentsSet();

            let count = 0;

            configComponents.forEach(configComponent => {
                if(components.includes(configComponent)) count++
            });

            return count
    },
}



module.exports = checkAndcreateConfigFolder