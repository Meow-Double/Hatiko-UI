const path = require('path');
const fsExtra = require('fs-extra');
const fs = require('fs');
const { pathIconMain, pathIconDest } = require('../../config/paths');
const { componentIconsData } = require('../../config/icons');

const copyIcons = (components) => {

  // 1) - Получаем список иконок исходя из введённых компонентов

  const arrayComponentKeys = Object.keys(componentIconsData);
  const currenArrayComponentByComponentKeys = components.filter((component) =>
    arrayComponentKeys.includes(component)
  );

  // 2) - Получить сет массива иконок
  const iconsSet = new Set();

  currenArrayComponentByComponentKeys.forEach((element) => {
    componentIconsData[element].forEach((icon) => iconsSet.add(icon));
  });

  // 2) - Находим существующие иконки

  const existingIconsArray = fs.readdirSync(pathIconDest);

  // Обрезаем .tsx
  const destIconsArray = existingIconsArray.map((icon) => icon.replace('.tsx', ''));

  // 3) - Находим иконки которые будем добавлять

  const iconsWhoNeedAdded = [];

  iconsSet.forEach((icon) => {
    if (!destIconsArray.includes(icon)) {
      iconsWhoNeedAdded.push(icon);
    }
  });

  // 4) - Копируем иконки

  iconsWhoNeedAdded.forEach((icon) => {
    const currentIconMainPath = path.join(pathIconMain, `${icon}.tsx`);
    const currentIconDestPath = path.join(pathIconDest, `${icon}.tsx`);

    fsExtra.copyFileSync(currentIconMainPath, currentIconDestPath);
  });


};

module.exports = copyIcons;
