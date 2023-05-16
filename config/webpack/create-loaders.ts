import { RuleSetRule } from 'webpack';

import {
  createImageLoader,
  createSvgLoader,
  createFontLoader,
  createBabelLoader,
  createSassLoader,
} from './loaders';

import { IOptions } from './types';

const createLoaders = (isDev: IOptions['isDev']): RuleSetRule[] => {
  const image = createImageLoader();
  const svg = createSvgLoader();
  const font = createFontLoader();
  const sass = createSassLoader(isDev);
  const babel = createBabelLoader();

  return [image, svg, font, sass, babel];
};

export { createLoaders };
