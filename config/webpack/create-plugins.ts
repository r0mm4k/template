import { ProgressPlugin, WebpackPluginInstance, DefinePlugin } from 'webpack';
import HtmlPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { IOptions } from './types';

const createPlugins = ({
  paths: { html, assets },
  isDev,
  isAnalyze,
}: IOptions): WebpackPluginInstance[] => {
  return [
    new ProgressPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: assets,
          noErrorOnMissing: true,
          globOptions: {
            ignore: ['**/*.ico', '**/*.html'],
          },
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
    }),
    new HtmlPlugin({
      template: html,
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    isAnalyze && new BundleAnalyzerPlugin(),
  ].filter((instance): instance is WebpackPluginInstance => !!instance);
};

export { createPlugins };
