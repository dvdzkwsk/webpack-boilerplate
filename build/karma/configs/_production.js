import { DIST_DIRNAME } from '../../../config';

export default {
  reporters : ['spec', 'coverage'],
  singleRun : true,
  coverageReporter : {
    type : 'html',
    dir  : `${DIST_DIRNAME}/coverage/`
  }
};
