#!/usr/bin/env sh
###
 # @Author: 刘东升
 # @Date: 2021-08-10 17:54:12
 # @LastEditors: 刘东升
 # @LastEditTime: 2021-09-06 18:05:40
 # @Descripttion: 
 # @version: 
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'change'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:DongshengLL/zgd-ui-pc.git master:gh-pages


cd -