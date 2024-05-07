import { Configuration, ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshTypeScript from 'react-refresh-typescript'

export var buildLoaders = (options: BuildOptions):ModuleOptions['rules'] => {
    var {mode} = options
    var isDev = mode === 'development'

    var tsLoader = {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
                    })
                }
            }
        ],
    }

    var cssLoader = {
        loader: "css-loader",
            options: {
                modules: {
                    localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                }
            }
    }

    var sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            cssLoader,
            // Compiles Sass to CSS
            "sass-loader"
        ]
    }

    var assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
    }

    var svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{
            loader: '@svgr/webpack', 
            options: { 
                icon: true,svgoConfig: {
                plugins: [
                    {
                        name: 'convertColors',
                        params: {
                            currentColor: true,
                        }
                    }
                ]
                } 
            }
        }],
    }

    return [
        assetsLoader, 
        sassLoader, 
        tsLoader, 
        svgLoader
    ]
}