const path = require("path");
const fsExtra = require("fs-extra")
const fs = require("fs")
const {uncompountFolder, pathComponentsDest} = require("../config/paths");


const copyComponents = (components) => {
  

    components.forEach(component => {

        const componentPath = path.join(uncompountFolder, component) 
        const componentDestPath = path.join(pathComponentsDest, component);

        if(fs.existsSync(componentDestPath)){
            return console.log(`Компонент ${component} уже существует`)
        }

        fsExtra.copySync(componentPath, componentDestPath);

        return console.log(`Компонент ${component} был создан`)
    });
}

module.exports = copyComponents