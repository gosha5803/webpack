import { Configuration } from "webpack-dev-server"
import { BuildOptions } from "./types/types"

export var buildDevServer = (options: BuildOptions):Configuration => {
    var {port} = options

    return {
        port,
        hot: true,
        historyApiFallback: true
    }
}