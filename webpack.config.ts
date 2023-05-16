import { resolve } from 'path';
import { Configuration } from 'webpack';

import { IWebpackEnv, IWebpackPaths, createWebpackConfig } from './config/webpack';

export default (env: IWebpackEnv): Configuration => {
  const paths: IWebpackPaths = {
    entry: resolve(__dirname, 'src', 'index.tsx'),
    build: resolve(__dirname, 'build'),
    assets: resolve(__dirname, 'public'),
    html: resolve(__dirname, 'public', 'index.html'),
    src: resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const port = env.port || 3000;
  const isDev = mode === 'development';
  const analyze = env.analyze || 'off';
  const isAnalyze = analyze === 'on';

  return createWebpackConfig({
    mode,
    paths,
    isDev,
    isAnalyze,
    port,
  });
};
