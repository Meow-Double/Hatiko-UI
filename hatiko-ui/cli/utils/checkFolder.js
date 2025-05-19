

const fs = require('fs');
const { destDir } = require('../config/paths');

const createFolder = require("./createFolder")

const checkFolder = () => {
    console.log(destDir)
  if (!fs.existsSync(destDir)) {
    createFolder(destDir)
    return console.log("Папка UI компонентов была добавлена")
  };
  
  return true;
};

module.exports = checkFolder