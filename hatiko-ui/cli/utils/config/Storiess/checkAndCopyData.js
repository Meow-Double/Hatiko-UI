




const { pathConfigStorybookDest } = require('../../../config/paths');
const createStorybookFolder = require('./createStoriesFolder');
const {componentWithDecorators, componentWithStyles, componentsWithImages} = require("../../../config/stories")



const checkAndCopyData = (components) => {
    const componentsStorybookSet = new Set();

    componentsStorybookSet.add(...componentWithDecorators);
    componentsStorybookSet.add(...componentWithStyles);
    componentsStorybookSet.add(...componentsWithImages);

    const countComponentsMatched = componentsStorybookSet.forEach(storyComponent => components.includes(storyComponent) && count++)


    console.log(countComponentsMatched);
    
};

module.exports = checkAndCopyData;