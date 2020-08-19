const webpack = require('webpack');
const vtkRules = require('vtk.js/Utilities/config/dependency').webpack;

module.exports = {
  module: {
    rules: vtkRules.core.rules,
  },
};
