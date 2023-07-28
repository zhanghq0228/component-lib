# monorepo 组件库架构


基于 **lerna** 和 **yarn workspace** 的 **monorepo** 工作流方式管理的项目库，
用 **yarn workspace** 来处理依赖问题，用 **lerna** 来处理版本发布问题



- 新增组件库子包

```lerna create xxx ```
需要注意 xxx 为上线的 npm 报名，注意命名规范.

- 初始化工程,建议使用 vite 来新增子包

``` cd packages && yarn create vite playground --template vue-ts ```

使用 vite 创建子包，默认 **private**，不对外展示组件，

需要注意:根据实际情况修改

- 版本控制

Independent Mode 表示采用独立的版本控制，根据每个包独立控制版本，发布时候统一修改.

lerna 采用 "independent" 模式处理每个包的版本
``` lerna version```


