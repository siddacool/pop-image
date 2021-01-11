/* eslint-disable @typescript-eslint/no-explicit-any */
import { unsplashFetchUrl } from './base';

const createImageFetchLink = (config: { tags: string[] }) => {
  let unsplahRandomLink = '';

  if (config) {
    if (config.tags && config.tags.length) {
      unsplahRandomLink = `${unsplahRandomLink}/?${config.tags.join(',')}`;
    }
  }

  return unsplahRandomLink;
};

export default {
  fetchImage: (config: { tags: string[] }): any =>
    unsplashFetchUrl(`/random${createImageFetchLink(config)}`),
};
