import assign from 'object-assign';
import { NODE_ENV } from '../../config';

export default function (karmaConfig) {
  return karmaConfig.set(
    assign(
      require('./configs/default'),
      require(`./configs/_${NODE_ENV}`)
    )
  );
};
