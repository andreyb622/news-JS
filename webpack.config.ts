import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import DotenvWebpackPlugin from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import devConfig from './webpack.dev.config';
import prodConfig from './webpack.prod.config';

type Env = {
    mode: 'dev' | 'prod';
};

const baseConfig: Configuration = {
    entry: path.resolve(__dirname, './src/index.ts'),
    mode: 'development',
    module: {
        rules: [
            { test: /\.ts$/i, use: 'ts-loader', exclude: /node_modules/ },
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new DotenvWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
};

export default ({ mode }: Env): Configuration => {
    const isProductionMode: boolean = mode === 'prod';
    const envConfig: Configuration = isProductionMode ? prodConfig : devConfig;

    return merge(baseConfig, envConfig);
};
