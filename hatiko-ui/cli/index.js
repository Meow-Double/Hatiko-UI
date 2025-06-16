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

const checkAndCreateTestFolder = require('./utils/config/Tests/checkAndCreateFolder');
const copyTestsFolder = require('./utils/config/Tests/copyFolder');

const checkAndCopyStorybookFolder = require('./utils/config/Stories/checkAndCopyFolder');
const copyStorybookFolder = require('./utils/config/Stories/copyFolder');


const checkAndcreateConfigFolder = require('./utils/config/new/checkAndcreateConfigFolder');



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


    // Проверить на наличие папки configs, нужна ли она или нет. Для этого я предлагаю посмотреть 2 варианта: 1 нужны ли коспонентам две этих папки. 2 - Есть ли уже у пользователя такая папка
    // checkAndCreateFolder();

    // createStoriesFolder();



    // Если папка есть, вернёт false, иначе true
    const resultConfigFolder = checkAndcreateConfigFolder(components);

    if(resultConfigFolder){
            const testResult = checkAndCreateTestFolder(components);

            if(testResult){
                copyTestsFolder();
            };

            const storybookResult = checkAndCopyStorybookFolder(components);

            if(storybookResult){
                copyStorybookFolder();
            };
    }

})


program.parse(process.argv);