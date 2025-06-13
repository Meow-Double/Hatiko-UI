const fs = require('fs');



const createFolder = (folderPath) => {
    try {
        fs.mkdirSync(folderPath);

        return true;
    } catch (error) {
        console.log(`Ошибка при создании папки. Путь: ${folderPath}. Общая ошибка:`, error);

        return false;
    }
}

module.exports = createFolder