import { RuleSetRule } from 'webpack';

const createSvgLoader = (): RuleSetRule => {
  return {
    test: /\.svg$/i,
    loader: '@svgr/webpack',
  };
};

export { createSvgLoader };
