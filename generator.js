
module.exports = (api, options, rootOptions) => {
  // TODO 整理 options
  console.log('fin-js-preset')

  // 安装 babel/polyfill
  if (options.usePolyfill) {
    api.extendPackage({
      devDependencies: {
        "@babel/polyfill": "^7.0.0-rc.1",
      }
    })
  }
  if (options.useElementUI) {
    api.extendPackage({
      devDependencies: {
        "element-ui": "^2.4.10",
      }
    })
  }
  api.extendPackage({
    gitHooks: {
      "pre-commit": "lint-staged",
    },
    "lint-staged": {
      "*.{js,css}": [
        "prettier",
        "eslint",
        "git add"
      ]
    }
  })
  // 插件通用依赖
  api.extendPackage({
    dependencies: {
      axios: '^0.18.0',
      'vue-router': '^3.0.1',
      vuex: '^3.0.1'
    },
    devDependencies: {
      "prettier": "^1.15.3",
      "eslint-config-prettier": "^3.3.0",
      "eslint-plugin-prettier": "^3.0.0",
      "lint-staged": "^8.1.0",
    }
  })
  api.render('./template')
  // 配置文件
  // api.render({
  //   './.eslintrc.js'     : './template/_eslintrc.js',
  //   './.gitignore'       : './template/_gitignore',
  //   './.postcssrc.js'    : './template/_postcssrc.js'
  // });
}