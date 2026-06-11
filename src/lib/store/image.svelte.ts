import { browser } from '$app/environment';
import { getCurrentTime, getToday } from '$lib/helpers/getToday';

const STORAGE_KEY = 'image-name';

function createImageStore() {
  const today = getToday();

  let initialValue = today;

  if (browser) {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      const storedDate = stored.split(':')[0];

      if (storedDate === today) {
        initialValue = stored;
      } else {
        localStorage.setItem(STORAGE_KEY, today);
      }
    } else {
      localStorage.setItem(STORAGE_KEY, today);
    }
  }

  let imageName = $state(initialValue);

  return {
    get imageName() {
      return imageName;
    },

    updateImageName() {
      imageName = getCurrentTime();

      if (browser) {
        localStorage.setItem(STORAGE_KEY, imageName);
      }
    },

    resetImageName() {
      imageName = getToday();

      if (browser) {
        localStorage.setItem(STORAGE_KEY, imageName);
      }
    },
  };
}

export const useImageStore = createImageStore();
