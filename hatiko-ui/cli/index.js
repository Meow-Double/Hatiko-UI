#!/usr/bin/env node


const { program } = require('commander');

const checkSrcFolder = require('./utils/LibraryFolder/checkSrcFolder');
const checkLibraryFolder = require('./utils/LibraryFolder/checkLibraryFolder');
const createLibraryFolder = require('./utils/LibraryFolder/createLibraryFolder');

const createUncompoundFolder = require('./utils/Uncompound/createCompoundFolder');
const copyUncompoundComponents = require('./utils/Uncompound/copyComponents');
const createUncompoundIndexFile = require('./utils/Uncompound/createIndexFile');


const createCompoundFolder = require('./utils/Compound/createFolder');
const copyCompoundComponents = require('./utils/Compound/copyComponents');
const createCompoundIndexFile = require('./utils/Compound/createIndexFile');

const createIconsFolder = require('./utils/Icons/createIconsFolder');
const copyIcons = require('./utils/Icons/copyIcons');
const createIndexFile = require('./utils/Icons/createIndexFile');

const createAssetsFolder = require('./utils/Assets/createAssetsFolder');
const copyAssets = require('./utils/Assets/copyAssets');

const checkAndCreateTestFolder = require('./utils/config/Tests/checkAndCreateFolder');
const copyTestsFolder = require('./utils/config/Tests/copyFolder');

const checkAndCopyStorybookFolder = require('./utils/config/Stories/checkAndCopyFolder');
const copyStorybookFolder = require('./utils/config/Stories/copyFolder');


const checkAndcreateConfigFolder = require('./utils/config/config/checkAndcreateConfigFolder');


const createAuxiliaryFolder = require('./utils/Auxiliary/createFolder');
const copyAuxiliaryFolder = require('./utils/Auxiliary/copyFolder');

const createUtilsFolder = require('./utils/Utils/createFolder');
const copyUtilsFolder = require('./utils/Utils/copyFolder');


const createThemesFolder = require('./utils/Themes/createFolder');
const copyThemesFolder = require('./utils/Themes/copyFolder');


program.version('0.0.1');
program.description('CLI for Hatiko-UI');


program.command("add").description("Adds recorded components to the project").arguments("<components...>").option("--compound", "Mark all components as compound").action((components, options) => {
    checkSrcFolder();
    checkLibraryFolder();
    createLibraryFolder();


    if(options.compound){
        createCompoundFolder()
        copyCompoundComponents(components);
        createCompoundIndexFile();

        return true
    };


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

     // Auxiliary
    const AuxiliaryResult = createAuxiliaryFolder();

    if(AuxiliaryResult){
        copyAuxiliaryFolder()
    }

    // Utils
    const UtilsResult = createUtilsFolder();

    if(UtilsResult){
        copyUtilsFolder()
    }

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
    };
})

program.command("theme").description("Adds recorded components to the project").argument("<name...>").action((themeName) => {
    createThemesFolder();
    copyThemesFolder(themeName[0]);
})



program.parse(process.argv);