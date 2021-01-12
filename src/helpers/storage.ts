/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import defaultData from '../data';

const localStorageName = 'pop-image-local-cookie-001';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getStorageMain = (): any => {
  let store = localStorage.getItem(localStorageName);

  if (!store || (store && store.trim() === '')) {
    localStorage.setItem(localStorageName, JSON.stringify(defaultData));
    store = localStorage.getItem(localStorageName);
  }

  store = JSON.parse(store || '{}');

  return store;
};

export const getStorage = getStorageMain;

export const updateStorage = (items = {}) => {
  let store = getStorageMain();
  store = { ...store, ...items };

  localStorage.setItem(localStorageName, JSON.stringify(store || {}));
};
