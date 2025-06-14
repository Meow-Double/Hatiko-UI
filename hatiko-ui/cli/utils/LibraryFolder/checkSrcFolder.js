const fs = require('fs');
const { srcDestDir } = require('../../config/paths');

// Checking the main folder on the user side

const checkSrcFolder = () => {

  if (!fs.existsSync(srcDestDir)) {
    return console.log("Отсуствует src папка, вам необходимо её создать")
  };
  
  return true;
};

module.exports = checkSrcFolder;