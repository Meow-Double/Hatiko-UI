const path = require('path');
const fsExtra = require('fs-extra');
const fs = require('fs');
const { pathCompoundDest, pathCompoundMain } = require('../../config/paths');

const copyComponents = (components) => {
  components.forEach((component) => {
    const mainPathComponent = path.join(pathCompoundMain, component);
    const destPathComponent = path.join(pathCompoundDest, component);

    if (fs.existsSync(destPathComponent)) {
      return console.log(`Компонент ${component} уже существует`);
    }

    fsExtra.copySync(mainPathComponent, destPathComponent);

    return console.log(`Компонент ${component} был создан`);
  });
};

module.exports = copyComponents;