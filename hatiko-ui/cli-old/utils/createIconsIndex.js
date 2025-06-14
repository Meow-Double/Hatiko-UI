const path = require("path");
const fs = require("fs")
const { pathIconsDest } = require("../config/paths");


const createIconsIndex = (icons) => {

    const fileIndexPath = path.join(pathIconsDest, "index.ts");

  const componentsContent = icons.map(
    (icon) => `import { ${icon} } from './${icon}'`
  );

  const mainContent = componentsContent.join('\n');

  if (fs.existsSync(pathIconsDest)) {
    fs.writeFileSync(fileIndexPath, mainContent);

    return console.log('Файл index был создан');
  }

  return console.log('Отсуствует папка');
}


module.exports = createIconsIndex