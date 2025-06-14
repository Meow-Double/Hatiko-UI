const fs = require('fs');
const path = require('path');
const { pathIconDest } = require('../../config/paths');

const createIndexFile = () => {
  const pathIndexFile = path.join(pathIconDest, 'index.ts');

  const existingIconsWithIndexFile = fs.readdirSync(pathIconDest);
  const existingIcons = existingIconsWithIndexFile.filter((file) => file !== 'index.ts');

  const iconsContent = existingIcons.map(
    (component) => `export { ${component.replace('.tsx', '')} } from './${component}'`
  );

  const indexFileContent = iconsContent.join('\n');

  if (fs.existsSync(pathIconDest)) {
    fs.writeFileSync(pathIndexFile, indexFileContent);

    return console.log('Файл index был создан');
  }

  return console.log('Отсуствует папка');
};

module.exports = createIndexFile;