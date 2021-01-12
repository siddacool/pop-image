/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const createError = (err: any) => {
  let errorMsg = 'Unknown error occurred';

  if (err.response) {
    if (err.response.data && err.response.data.error) {
      errorMsg = err.response.data.error;
    } else {
      errorMsg = err.response.statusText;
    }
  } else if (err.message) {
    errorMsg = err.message;
  }

  return errorMsg;
};

export const textToArray = (text: string, separtor: string) =>
  text
    .trim()
    .replace(/\s/g, '')
    .split(separtor || ',')
    .filter((t) => t && t.trim() !== '');

export const arryToText = (textArray: string[], joiner: string) =>
  textArray.join(joiner);

export const applyThemeToBody = (isDarkTheme = false) => {
  const bodyContainer = document.querySelector('body');

  if (bodyContainer) {
    console.log('yo');
    if (isDarkTheme) {
      bodyContainer?.classList.add('dark');
    } else {
      bodyContainer?.classList.remove('dark');
    }
  }
};
