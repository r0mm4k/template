import { RuleSetRule } from 'webpack';

const createImageLoader = (): RuleSetRule => {
  return {
    test: /\.(png|jpe?g|gif)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'images/[name].[contenthash:8][ext]',
    },
  };
};

export { createImageLoader };
