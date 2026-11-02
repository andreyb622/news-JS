import path from 'path';
import { Configuration } from 'webpack';
import 'webpack-dev-server';

const devConfig: Configuration = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, './dist'),
    },
};

export default devConfig;
