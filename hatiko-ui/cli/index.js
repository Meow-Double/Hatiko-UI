#!/usr/bin/env node


const { program } = require('commander');

const checkFolder = require('./utils/checkFolder');
const copyComponents = require("./utils/copyComponents")
const createFile = require("./utils/createIndexFile")
const getIconsArray = require("./utils/getIconsArray");
const createIcons = require("./utils/createIcons");
const createIconsIndex = require("./utils/createIconsIndex");
const createAndCopyStyles = require("./utils/createAndCopyStyles");

program.version('0.0.1');
program.description('CLI for Hatiko-UI');

program
  .command('add')
  .description('Добавляет записанные компоненты')
  .arguments('<components...>')
  .action((components) => {
    checkFolder();
    copyComponents(components)
    createFile(components)
    const iconsArray = getIconsArray(components);

    if(iconsArray?.length !== 0){
      createIcons(iconsArray);
      createIconsIndex(iconsArray)
    }

    createAndCopyStyles();
  });
  
  program.parse(process.argv);