import { ResolveOptions } from 'webpack';

import { IOptions } from './types';

const createResolvers = (src: IOptions['paths']['src']): ResolveOptions => {
  return {
    extensions: ['.tsx', '.jsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [src, 'node_modules'],
    alias: {
      '@': src,
    },
  };
};

export { createResolvers };
