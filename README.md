# Blog-React

使用`create-react-app 构建个人博客网站`

目的：

1. 通过从无到有来感受完成的项目构建、上线、维护，完善个人React知识链
2. 构建个人博客网站，方便分享文章，和网站的自我管理
3. 属于自己的第一个开源项目，自娱或公娱为主



## 版本发布规范

[semver.org](https://semver.org/lang/zh-CN/)




## Git Commit Message 规范

提交commit代码格式：

```
git commit -m <type>[optional scope]: <description>
```

type ：用于表明我们这次提交的改动类型，是新增了功能？还是修改了测试代码？又或者是更新了文档？总结以下 11 种类型：

- build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
- ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
- docs：文档更新
- feat：新增功能
- fix：bug 修复
- perf：性能优化
- refactor：重构代码(既没有新增功能，也没有修复 bug)
- style：不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
- test：新增测试用例或是更新现有测试
- revert：回滚某个更早之前的提交
- chore：不属于以上类型的其他类型(日常事务)

optional scope：一个可选的修改范围。用于标识此次提交主要涉及到代码中哪个模块。

description：一句话描述此次提交的主要内容，做到言简意赅。



## 样式规范

> 项目已配置CSS Module

使用方式

```
├── index
     ├── index.js
     └── index.module.css
```

```jsx
// index.js
import STYLE form "./index.module.scss"
export default () => {
    return <div className={STYLE.wrap}>WRAP</div>
}
```

```scss
// index.module.css
.wrap {
    background-color: skyblue
}
```

