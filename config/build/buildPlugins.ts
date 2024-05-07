import { Configuration, DefinePlugin } from "webpack";
import { BuildOptions } from "./types/types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshTypeScript from '@pmmmwh/react-refresh-webpack-plugin'
import path from 'path'

export var buildPlugins = (options: BuildOptions):Configuration['plugins'] => {
    var {paths, mode, platform} = options 
    var isDev = mode === 'development'

    var plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: path.resolve(paths.public, 'index.html'),
            favicon: path.resolve(paths.public, 'favicon.ico')
            
        }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform)
        })
    ]

    if(isDev) {
        plugins.push(new ReactRefreshTypeScript())
    } else {
        plugins.push(new ForkTsCheckerWebpackPlugin())
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            })
        )
    }

    return plugins
}