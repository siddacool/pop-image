/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getStorage } from './storage';

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

const setBodyTheme = (isDarkTheme = false) => {
  const bodyContainer = document.querySelector('body');

  if (bodyContainer) {
    if (isDarkTheme) {
      bodyContainer?.classList.add('dark');
    } else {
      bodyContainer?.classList.remove('dark');
    }
  }
};

export const applyThemeToBodyFromLocalStorage = () => {
  const { theme = 'light' } = getStorage();
  const isDarkTheme = theme === 'dark' ? true : false;
  setBodyTheme(isDarkTheme);
};

export const applyThemeToBody = (isDarkTheme = false) => {
  setBodyTheme(isDarkTheme);
};
