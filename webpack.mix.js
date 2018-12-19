let mix = require('laravel-mix');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')

    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/js'),
            },
        },
    })
    .options({
        uglify: {
            uglifyOptions: {
                compress: {
                    drop_console: true
                }
            }
        }
    })

if (process.env.npm_lifecycle_event !== 'hot') {
    mix.version()
}

if (!mix.inProduction()) {
    mix.webpackConfig({
            devtool: 'source-map'
        })
        .sourceMaps()
}
