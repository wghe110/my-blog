const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
    lang: 'zh-CN',
    title: 'wghe110 的笔记',
    description: 'blog 博客 wghe110',

    // configure default theme
    theme: defaultTheme({
        logo: '/logo.svg',
        logoDark: '/logo-dark.svg',
        navbar: [
            {
                text: '前端环境',
                link: '/environment/'
            },
            {
                text: 'javascript',
                link: '/javascript/'
            },
            {
                text: 'css',
                link: '/css/'
            },
            {
                text: 'vue相关',
                link: '/vue/'
            },
            {
                text: '工具类',
                link: '/tools/'
            },
            {
                text: '脚手架相关',
                link: '/scaffold/'
            },
            {
                text: 'git相关',
                link: '/git/'
            },
            {
                text: '其他',
                link: '/others/'
            },
        ],
        sidebar: {
            '/environment/': [
                {
                    text: '前端环境',
                    children: [
                        '/environment/index.md',
                        '/environment/env-mac.md',
                        '/environment/env-win.md',
                        '/environment/npm-reg-taobao.md',
                        '/environment/ssh-windows.md',
                        '/environment/nvm-install.md',
                        '/environment/cleanly-vscode.md',
                        '/environment/uninstall-node-mac.md',
                        '/environment/api-define.md',
                    ]
                }
            ],
            '/javascript/': [
                {
                    text: 'js相关',
                    children: [
                        '/javascript/index.md',
                        '/javascript/tool-functions.md',
                    ]
                }
            ],
            '/git/': [
                {
                    text: 'git',
                    children: [
                        '/git/index.md',
                        '/git/command.md',
                        '/git/wrong-solution.md',
                        '/git/npm-errors.md',
                    ]
                }
            ],
            '/scaffold/': [
                {
                    text: '脚手架相关',
                    children: [
                        '/scaffold/index.md',
                        '/scaffold/vue-cli_path.md',
                        '/scaffold/vite-related.md',
                    ]
                }
            ],
            '/vue/': [
                {
                    text: 'vue相关',
                    children: [
                        '/vue/index.md',
                        '/vue/vue3-404.md',
                    ]
                }
            ],
            '/tools': [
                {
                    text: '工具相关',
                    children: [
                        '/tools/index.md',
                        '/tools/tinymce-vue3.md',
                    ]
                }
            ]
        }
    }),
}