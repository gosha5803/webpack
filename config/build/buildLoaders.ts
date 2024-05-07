import { Configuration, ModuleOptions, RuleSetRule } from "webpack";
import { BuildLoader, BuildOptions } from "./types/types";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import { buildBabelLoader } from "./babel/buildBabelLoader";

export var buildLoaders = (options: BuildOptions):ModuleOptions['rules'] => {
    var {mode, paths} = options
    var isDev = mode === 'development'

    var jsLoaders: Record<BuildLoader, RuleSetRule> = {
        typescript: {
            exclude: /node_modules/,
            test: /\.tsx?$/,
            use: [
                {
                    loader: 'ts-loader',
                    options: {
                        // transpileOnly: true,
                        getCustomTransformers: () => ({
                            before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
                        })
                    }
                }
            ],
        },
        esBuild: {
            exclude: /node_modules/,
            test: /\.[jt]sx?$/,
            loader: 'esbuild-loader',
            options: {
                target: 'es2015',
                tsconfig: paths.tsconfig
            }
        },
        babel: buildBabelLoader(options),
        // swc: {
        //     test: /\.ts(x?)$/,
        //     exclude: /(node_modules)/,
        //     use: {
        //       // `.swcrc` can be used to configure swc
        //       loader: "swc-loader"
        //     }
        //   }
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
        jsLoaders[options.loader],
        // babelLoader, 
        svgLoader
    ]
}