const rewireStyledComponents = require("react-app-rewire-styled-components");
const { injectBabelPlugin } = require("react-app-rewired");
const removeDataPropertiesProd = require("babel-plugin-react-remove-properties");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config = rewireStyledComponents(config, env);
  conifg = injectBabelPlugin("babel-plugin-react-remove-properties", config);
  return config;
};
