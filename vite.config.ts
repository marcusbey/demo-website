import { resolve } from 'path'
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
    root: './src',
    plugins: [
        createHtmlPlugin({
            minify: true,
            pages: [
                {
                    entry: 'main.ts',
                    filename: 'index.html',
                    template: 'src/index.html'
                },
                {
                    entry: 'about.ts',
                    filename: 'about.html',
                    template: 'src/about.html'
                },
                {
                    entry: 'contact.ts',
                    filename: 'contact.html',
                    template: 'src/contact.html'
                },
                {
                    entry: 'services.ts',
                    filename: 'services.html',
                    template: 'src/services.html'
                },
                {
                    entry: 'blog.ts',
                    filename: 'blog.html',
                    template: 'src/blog.html'
                }
            ]
        })
    ],
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                about: resolve(__dirname, 'src/about.html'),
                contact: resolve(__dirname, 'src/contact.html'),
                services: resolve(__dirname, 'src/services.html'),
                blog: resolve(__dirname, 'src/blog.html')
            }
        }
    }
})