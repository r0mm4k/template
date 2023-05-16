import { RuleSetRule } from 'webpack';

const createFontLoader = (): RuleSetRule => {
  return {
    test: /\.(woff2?|eot|[to]tf)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'fonts/[name].[contenthash:8][ext]',
    },
  };
};

export { createFontLoader };
