import { Configuration } from 'webpack';

import { IOptions } from './types';

import { createLoaders } from './create-loaders';
import { createResolvers } from './create-resolvers';
import { createPlugins } from './create-plugins';
import { createDevServer } from './create-dev-server';

const createWebpackConfig = (options: IOptions): Configuration => {
  const {
    port,
    mode,
    paths: { src, entry, build },
    isDev,
  } = options;

  return {
    mode,
    entry,
    devtool: isDev ? 'inline-source-map' : false,
    output: {
      filename: 'js/[name].[contenthash:8].js',
      path: build,
      clean: true,
      publicPath: '/',
    },
    module: {
      rules: createLoaders(),
    },
    resolve: createResolvers(src),
    plugins: createPlugins(options),
    devServer: isDev ? createDevServer(port) : undefined,
  };
};

export { createWebpackConfig };
