# vue-next-template

## vite vue-next typescript eslint prettier vscode

> 1. [https://www.npmjs.com/package/vite](https://www.npmjs.com/package/vite) 全局安装 `vite` 并创建 vue3.0 项目

> 2. VScode 编辑器安装插件：`prettier` 与 `eslint` 且依赖包 `npm add --save-dev prettierrc typescript prettierrc eslint-config-prettier eslint-plugin-prettier`

> 3. 配置 `prettier`、 `eslint` 与 `typescript`: `prettier` 手动创建 `.prettierrc`；
>    `eslint` 命令行创建 `.\node_modules\.bin\eslint --init` (重点配置框架、导入模式、启用 typescript)；
>    `typescript` 命令行创建 `.\node_modules\.bin\tsc --init`（如果没该文件会使用 eslint 内置配置）；

> 4. editorConfig 配置编辑器中展示格式

> 5. `src/shims-vue.d.ts` 声明支持 vue 文件并在 `index.html` 中直接引入 `main.ts`(Vite DEV 环境默认支持直接引入 TS 文件)

> 6. vue-router4.0 使用与 3.0 版本几乎一致使用方式，仅仅引用方式有所改变，可参考模板

> 7. vuex4.0 `state 、 getter 、 mutation 、 actions 、 modules` 使用与 vuex3 几乎一致使用方式与 API, 但是`modules` 测翻天覆地的变化， 可参考模板
