const path = require('path');

// plugins y minificadores de css y scss/sass
// para reducir el tamaño del as hojas de estilo del proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Para el template del html que va a utilizar el webpack
const { SourceMapDevToolPlugin } = require('webpack'); //  para conocer el Source map de nuestro proyecto (desde el navegador)
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// para reducir los css

// configuracion del puerto
const port = process.env.PORT || 3000;

// exportar configuracion de webpack

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.[hash].js',
        publicPath: '/',
    },
    context: path.resolve(__dirname),
    devServer: {
        port,
        inline: true,
        historyApiFallback: true,
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            // Reglas para archivos jsx y js
            // tienen q pasar el linting para poder pasar
            {
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: [
                    'eslint-loader',
                    'source-map-loader', // te permite vsualizar el codigo desde el navegador
                ],
            },
            // reglas para archivos de JS y JSX
            // Reglas de babel ES y JSX
            {
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        '@babel/env', '@babel/react',
                    ],
                },
            },
            // Reglas para los archivos CSS y SASS y SCSS para minificarlos y cargarlos en el bundle
            {
                test: /(\.css|\.scss)$/,
                loader: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            // Reglas para los archivos  de imagenes
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: ['file-loader'],

            },
        ],
    },
    plugins: [
        // template HTML
        new HtmlWebpackPlugin(
            {
                template: './index.html',
            },
        ),
        new MiniCssExtractPlugin(
            {
                filename: './css/styles.css',
            },
        ),
        new SourceMapDevToolPlugin(
            {
                filename: '[file].map',
            },
        ),
    ],
    resolve: {
        extensions: [
            '.js', '.jsx', '.css', '.scss', '.sass',
        ],
        modules: [
            'node_modules',
        ],
    },
};
