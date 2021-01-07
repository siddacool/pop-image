/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchUrl } from './base';

export default {
  fetchImage: (): any => fetchUrl('/random'),
};
