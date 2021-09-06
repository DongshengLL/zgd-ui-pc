/*
 * @Author: 刘东升
 * @Date: 2021-08-10 17:54:12
 * @LastEditors: 刘东升
 * @LastEditTime: 2021-09-06 14:23:49
 * @Descripttion: 
 * @version: 
 */
const path = require('path')
module.exports = {
    base: '/zgd-ui-pc/',
    title: 'zgd-ui-pc',
    description: 'zgd-ui-pc',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Github', link: 'https://github.com/DongshengLL/zgd-ui-pc/' },
        ],
        sidebar: [{
                title: '开发指南',
                collapsable: true,
                children: [
                    'views/guide/install.md',
                    'views/guide/get-started.md'
                ]
            },
            {
                title: '设计',
                collapsable: true,
                children: [
                    'views/design/color/',
                ]
            },
            {
                title: '组件',
                collapsable: true,
                children: [
                    'views/components/basic/',
                    'views/components/form/',
                    'views/components/navigation/',
                    'views/components/notice/',
                    'views/components/other/'
                ]
            },
        ]
    },
    scss: { //配置 scss 根目录
        includePaths: [path.join(__dirname, '../../style')]
    }
}