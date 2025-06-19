const fs = require('fs');
const path = require('path');
const { pathCompoundDest } = require('../../config/paths');

const createIndexFile = () => {
  const pathIndexFile = path.join(pathCompoundDest, 'index.ts');

  const existingComponentsWithIndexFile = fs.readdirSync(pathCompoundDest);
  const existingComponent = existingComponentsWithIndexFile.filter((file) => file !== 'index.ts');

  const componentsContent = existingComponent.map(
    (component) => `export { ${component} } from './${component}/${component}'`
  );

  const indexFileContent = componentsContent.join('\n');

  if (fs.existsSync(pathCompoundDest)) {
    fs.writeFileSync(pathIndexFile, indexFileContent);

    return console.log('Файл index был создан');
  }

  return console.log('Отсуствует папка');
};

module.exports = createIndexFile;