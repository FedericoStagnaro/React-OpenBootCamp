const path = require('path');

// plugins y minificadores de css y scss/sass
// para reducir el tamaño del as hojas de estilo del proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Para el template del html que va a utilizar el webpack
const { SourceMapDevToolPlugin } = require('webpack'); //  para conocer el Source map de nuestro proyecto (desde el navegador)
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// para reducir los css
const ESLintPlugin = require('eslint-webpack-plugin');
const eslintOptions = require('./.eslintrc.json');

// configuracion del puerto
const port = process.env.PORT || 3000;

// Reglas para archivos jsx y js
// tienen q pasar el linting para poder pasar
const sourceMapLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    enforce: 'pre',
    use: [
        {
            loader: 'source-map-loader', // te permite vsualizar el codigo desde el navegador
        },
    ],
};

// reglas para archivos de JS y JSX
// Reglas de babel ES y JSX
const babelConfig = {
    test: /(\.js|\.jsx)$/,
    exclude: /node_modules/,
    use: [
        {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/env', '@babel/react'],
            },
        },
    ],
};

// Reglas para los archivos CSS y SASS y SCSS para minificarlos y cargarlos en el bundle
// Reglas para los archivos  de imagenes
const cssConfig = {
    test: /(\.css|\.scss)$/,
    use: [
        MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
    ],
};

const fileConfig = {
    test: /\.(png|jpe?g|gif)$/,
    use: [
        {
            loader: 'file-loader',
        },
    ],
};

// exportar configuracion de webpack
module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.[contenthash].js',
        // publicPath: '/',
    },
    context: path.resolve(__dirname),
    devServer: {
        port,
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            babelConfig,
            sourceMapLoader,
            cssConfig,
            fileConfig,
        ],
    },
    plugins: [
        // template HTML
        new HtmlWebpackPlugin(
            {
                template: './index.html',
            },
        ),
        // new ESLintPlugin(eslintOptions),
        new MiniCssExtractPlugin(
            {
                filename: './src/css/styles.css',
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
