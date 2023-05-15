import { RuleSetRule } from 'webpack';

const createBabelLoader = (): RuleSetRule => {
  return {
    test: /\.[tj]sx?$/i,
    exclude: /node_modules/,
    loader: 'babel-loader',
  };
};

export { createBabelLoader };
