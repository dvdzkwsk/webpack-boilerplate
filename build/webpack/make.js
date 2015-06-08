import merge from '../utils/merge-deep';

export default function (config) {
  return merge(
    require('./configs/default'),
    require(`./configs/${config}`)
  );
};
