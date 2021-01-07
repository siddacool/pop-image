/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getImage = (store: {
  state: { images: { data: string[]; activeImageRank: number } };
}) =>
  store.state.images.activeImageRank !== null &&
  store.state.images.data[store.state.images.activeImageRank]
    ? store.state.images.data[store.state.images.activeImageRank]
    : '';

export const isImageFetching = (store: {
  state: { images: { isFetching: boolean } };
}) => store.state.images.isFetching;
