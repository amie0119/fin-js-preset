###  fin-js-preset

使用该预设创建项目

- ESLint + Prettier
- ESLint 使用 standard
- 默认安装 fin-utils、vuex、vue router、axios，polyfill、element-ui 可选安装。 如需补充请提 issue 或 pr
- vue-cli3 自带 yorkie(源于husky)，在提交 commit 之前会进行代码检查。
- template 文件夹下的配置文件会拷贝到项目根目录

### 使用方法

#### 拉取远程 preset
> vue create --preset amie0119/fin-js-preset [project-name] --registry=http://r.tools.elenet.me

#### 编辑器设置
如果使用的是 vscode，安装 prettier 和 ESLint 插件，并在首选项 > 设置里 进行配置
```json
    "prettier.eslintIntegration": true,
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        {
            "language": "html",
            "autoFix": true
        },
        {
            "language": "vue",
            "autoFix": true
        }
    ],
    // 为了避免和 eslint 冲突，讲编辑器默认的代码检查规则关闭（如果开启了）
    "editor.formatOnSave": false,
```
这样会在保存的时候自动修正，如果不想要开启可以不配置。

#### 生成项目
按照提示可以选择自己需要安装的部分，生成后的项目结构与正常项目相同，只不过会对 package.json 进行修改以及拷贝 template 目录下的模板配置文件到根目录。

#### 提交代码
提交代码时会跑 pre-commit hook，不符合规则的代码会给出错误提示，通过才可以提交。
