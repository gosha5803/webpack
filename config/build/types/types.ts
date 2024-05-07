export interface BuildOptions {
    paths: BuildPaths
    mode: BuildMode
    port: number
    platform: BuildPlatform
    bundleCheck?: boolean
    loader: BuildLoader
}

export type BuildMode = 'production' | 'development'
export type BuildPlatform = 'mobile' | 'desktop'
export type BuildLoader = 'esBuild' | 'typescript' | 'babel'

export interface BuildPaths {
    entry: string
    output: string
    public: string
    src: string
    tsconfig: string
}