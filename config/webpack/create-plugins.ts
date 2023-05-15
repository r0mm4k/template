import { ProgressPlugin, WebpackPluginInstance, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { IOptions } from './types';

const createPlugins = ({
  paths: { html },
  isDev,
  isAnalyze,
}: IOptions): WebpackPluginInstance[] => {
  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: html,
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    isAnalyze && new BundleAnalyzerPlugin(),
  ].filter((instance): instance is WebpackPluginInstance => !!instance);
};

export { createPlugins };
