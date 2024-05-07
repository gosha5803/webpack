import { Configuration } from "webpack"
import { BuildLoader, BuildMode, BuildPaths, BuildPlatform } from "./config/build/types/types"
import { buildWebpack } from "./config/build/buildWebpack"
import path from 'path'

interface EnvVariables {
    mode?: BuildMode
    port: number
    platform?: BuildPlatform
    bundleCheck?: boolean
    loader: BuildLoader
}

export default (env: EnvVariables):Configuration => {
    var paths:BuildPaths = {
        public: path.resolve(__dirname, 'public'),
        output: path.resolve(__dirname, 'dist'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        src: path.resolve(__dirname, 'src'),
        tsconfig: path.resolve(__dirname, 'tsconfig.json')
    }
    
    var config = buildWebpack({
        paths,
        mode: env.mode ?? 'development',
        port: env.port ?? 3040,
        platform: env.platform ?? 'desktop',
        bundleCheck: env.bundleCheck ?? false,
        loader: env.loader ?? 'typescript'
    })

    return config
}