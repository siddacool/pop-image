const baseUrlMain = 'https://source.unsplash.com/';

export const baseUrl = baseUrlMain;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchUrl = (url: string): any => fetch(`${baseUrl}${url}`);
