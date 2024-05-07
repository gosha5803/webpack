export interface BuildOptions {
    paths: BuildPaths
    mode: BuildMode
    port: number
    platform: BuildPlatform
}

export type BuildMode = 'production' | 'development'
export type BuildPlatform = 'mobile' | 'desktop';

export interface BuildPaths {
    entry: string
    output: string
    public: string
    src: string
}