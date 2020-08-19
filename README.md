# vtk.js + Angular 10

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.6.

Setting up build env starting from a blank Angular 10 template:
1. `yarn add vtk.js`
2. `yarn add -D shader-loader worker-loader`
3. `yarn add -D @angular-builders/custom-webpack`
4. Edit `angular.json`:
  - Replace `@angular-devkit/build-angular:browser` with `@angular-builders/custom-webpack:browser`
  - Replace `@angular-devkit/build-angular:dev-server` with `@angular-builders/custom-webpack:dev-server`
  - Add an option under your app project (subkey `architect.build.options`):
    ```
    "optionss": {
      "customWebpackConfig": {
        "path": "./webpack.config.js"
      }
      ...
    }
    ```
5. Add the following `webpack.config.js`:
  ```
  const webpack = require('webpack');
  const vtkRules = require('vtk.js/Utilities/config/dependency').webpack;

  module.exports = {
    module: {
      rules: vtkRules.core.rules,
    },
  };
  ```
6. Edit `index.html`:
  ```
  <script type="text/javascript">
    // vtk.js macro.js refers to globa
    var global = window || global;
  </script>
  ```
