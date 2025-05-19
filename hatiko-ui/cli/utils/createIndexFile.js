const fs = require('fs');
const { pathComponentsDest } = require('../config/paths');
const path = require('path');

const createIndexFile = (components) => {

    const fileIndexPath = path.join(pathComponentsDest, "index.ts");

  const componentsContent = components.map(
    (component) => `import { ${component} } from './${component}/${component}'`
  );

  const mainContent = componentsContent.join('\n');

  if (fs.existsSync(pathComponentsDest)) {
    fs.writeFileSync(fileIndexPath, mainContent);

    return console.log('Файл index был создан');
  }

  return console.log('Отсуствует папка');
};

module.exports = createIndexFile;