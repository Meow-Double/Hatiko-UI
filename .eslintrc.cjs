const { eslint } = require("@meow-double/eslint");

module.exports = eslint({defaultRules:{
    "custom/one-component":"off"
}});
