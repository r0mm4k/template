import { Configuration } from 'webpack-dev-server';

import { IOptions } from './types';

const createDevServer = (port: IOptions['port']): Configuration => {
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
};

export { createDevServer };
