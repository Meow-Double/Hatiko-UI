

const { componentIconsData } = require('../config/icons-components.data');

const getIconsArray = (components) => {
  const iconsSet = new Set();

  components.forEach((component) => {
    if (!!componentIconsData[component]) {
      componentIconsData[component].forEach((value) => {
        iconsSet.add(value);
      });
    }
  });

  const array = [];

  iconsSet.forEach((value) => array.push(value));

return array;
};



module.exports = getIconsArray

