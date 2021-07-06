declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | string;
    readonly SERVER_HOST: string;
    readonly SERVER_PORT: string;
    readonly REDIS_HOST: string;
    readonly REDIS_PORT: string;
  }
}
