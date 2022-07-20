## 安装
```
npm i -g beone
```

## 介绍
使用方式：beone [提交信息]，
比如：
`beone 'feat: add something'`
该操作会将本地分支开发时产生的commit整理成一个
(内部有使用git reset --soft操作，为避免文件冲突，执行该操作时请确保暂存区是空的，工作区的内容不受影响)

