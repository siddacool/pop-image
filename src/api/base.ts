const unsplashBaseUrlMain = 'https://source.unsplash.com';

export const unsplashBaseUrl = unsplashBaseUrlMain;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const unsplashFetchUrl = (url: string): any =>
  fetch(`${unsplashBaseUrl}${url}`);
