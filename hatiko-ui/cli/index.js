#!/usr/bin/env node


const { program } = require('commander');

const checkSrcFolder = require('./utils/LibraryFolder/checkSrcFolder');
const checkLibraryFolder = require('./utils/LibraryFolder/checkLibraryFolder');
const createLibraryFolder = require('./utils/LibraryFolder/createLibraryFolder');

const createUncompoundFolder = require('./utils/Uncompound/createCompoundFolder');
const copyUncompoundComponents = require('./utils/Uncompound/copyComponents');
const createUncompoundIndexFile = require('./utils/Uncompound/createIndexFile');

const createIconsFolder = require('./utils/Icons/createIconsFolder');
const copyIcons = require('./utils/Icons/copyIcons');
const createIndexFile = require('./utils/Icons/createIndexFile');

const createAssetsFolder = require('./utils/Assets/createAssetsFolder');
const copyAssets = require('./utils/Assets/copyAssets');

program.version('0.0.1');
program.description('CLI for Hatiko-UI');


program.command("add").description("Adds recorded components to the project").arguments("<components...>").option("--compound", "Mark all components as compound").action((components, options) => {
    checkSrcFolder();
    checkLibraryFolder();
    createLibraryFolder();

    createUncompoundFolder();
    copyUncompoundComponents(components);
    createUncompoundIndexFile();
  
    createIconsFolder();
    copyIcons(components);
    createIndexFile();

    const result = createAssetsFolder();   
    if(result){
    copyAssets();
    }

})


program.parse(process.argv);