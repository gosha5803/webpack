import webpack from 'webpack'
import 'webpack-dev-server'
import { BuildOptions } from './types/types'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'

export var buildWebpack = (options: BuildOptions):webpack.Configuration => {
    var {paths, mode} = options
    var isDev = mode === 'development'

    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[hash].js',
            clean: true,
            assetModuleFilename: 'assets/[name].[ext]'
        },

        plugins: buildPlugins(options),
        
        module: {
            rules: buildLoaders(options)
        },
        
        resolve: buildResolvers(options),
        
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev && 'eval-cheap-module-source-map', 
    }
}