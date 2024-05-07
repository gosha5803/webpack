import { BuildOptions } from "./types/types";
import { Configuration } from "webpack";

export var buildResolvers = (options: BuildOptions):Configuration['resolve'] => {
    var {paths} = options

    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            "@": paths.src
        }
    }
}