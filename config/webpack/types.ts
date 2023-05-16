import { Configuration } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

type TMode = Configuration['mode'];
type TPort = DevServerConfiguration['port'];
type TAnalyze = 'on' | 'off';

interface IPaths {
  entry: string;
  build: string;
  assets: string;
  html: string;
  src: string;
}

interface IEnv {
  mode?: TMode;
  port?: TPort;
  analyze?: TAnalyze;
}

interface IOptions {
  mode: TMode;
  paths: IPaths;
  isDev: boolean;
  isAnalyze: boolean;
  port: TPort;
}

export { TMode, IPaths, IEnv, IOptions };
