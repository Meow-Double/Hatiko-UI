



const { pathConfigStorybookDest } = require('../../../config/paths');
const {
  componentWithDecorators,
  componentWithStyles,
  componentsWithImages
} = require('../../../config/stories');
const fs = require("fs");

const checkAndCopyFolder = (components) => {
    if(configFolder.isExisting(pathConfigStorybookDest)){
        //Если папка есть вернётся false
        return false
    }
    if(configFolder.getCountStorybookComponents(components) >= 1){
        fs.mkdirSync(pathConfigStorybookDest);
        return true;
    }

    return false;
};


const configFolder = {

    isExisting: (pathFolder) => {
        if(fs.existsSync(pathFolder)) return true;

        return false
    },

    createStorybookComponentsSet: () => {
        const configComponentsSet = new Set();
    
        const allArrayComponents = [...componentWithDecorators, ...componentWithStyles, ...componentsWithImages]
       
        allArrayComponents.forEach(component => configComponentsSet.add(component))
        return configComponentsSet;
    },

    getCountStorybookComponents:(components) => {
            const configComponents = configFolder.createStorybookComponentsSet();

            let count = 0;

            configComponents.forEach(storybookComponent => {
                if(components.includes(storybookComponent)) count++
            });

            return count
    },
}




module.exports = checkAndCopyFolder