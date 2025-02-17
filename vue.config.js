const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: (config) => {
        // Dodavanje aliasa za src folder
        config.resolve.alias.set('@', require('path').resolve(__dirname, 'src'));

        // Pravilo za video fajlove
        config.module
            .rule('videos')
            .test(/\.(mp4|mov|webm|ogg)$/)
            .use('file-loader')
            .loader('file-loader')
            .options({
                name: 'videos/[name].[hash:8].[ext]',
            });

        // Pravilo za slike (uključujući WebP)
        config.module
            .rule('images')
            .test(/\.(png|jpe?g|webp|gif|svg)$/)
            .use('file-loader')
            .loader('file-loader')
            .options({
                name: 'img/[name].[hash:8].[ext]',
            });
    },
});