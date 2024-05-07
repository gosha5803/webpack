import { RuleSetRule } from "webpack"
import { BuildOptions } from "../types/types"

export var buildBabelLoader = ({ mode }: BuildOptions):RuleSetRule => {
    var isDev = mode === 'development'

    return  {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                ['@babel/preset-react',
                    {
                        runtime: isDev ? 'automatic' : 'classic',
                    }
                ],
            ]
          }
        }
      }
}