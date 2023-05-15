import { RuleSetRule } from 'webpack';

import { createBabelLoader } from './loaders';

const createLoaders = (): RuleSetRule[] => {
  const babel = createBabelLoader();

  return [babel];
};

export { createLoaders };
