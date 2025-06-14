const fs = require('fs');

const createFolder = (path) => {
  try {
    fs.mkdirSync(path);

    return { status: true, error: null };
  } catch (error) {
    return { status: false, error };
  }
};

module.exports = createFolder;