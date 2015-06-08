import defaultConfig from './configs/default';
import merge from '../utils/merge-deep';

export default function (config) {
  return function (karmaConfig) {
    return karmaConfig.set(
      merge(
        defaultConfig,
        require(`./configs/${config.toLowerCase()}`)
      )
    );
  };
};
