/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore } from 'vuex';
import {
  FETCH_IMAGE_REQUEST,
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_FAILURE,
  TOGGLE_SETTINGS_MODAL,
  UPDATE_SEARCH_TAGS,
  SET_THEME,
} from '../helpers/constants/actions';
import { createError, textToArray, applyThemeToBody } from '../helpers/utils';
import imageApi from '../api/image';
import { getStorage, updateStorage } from '../helpers/storage';

const getTagsFromStorage = () => {
  const { tags = [] } = getStorage();

  return tags;
};

const getthemeFromStorage = () => {
  const { theme = 'light' } = getStorage();

  return theme;
};

const store = createStore({
  state() {
    return {
      images: {
        isFetching: false,
        errorMessage: '',
        data: [],
        activeImageRank: null,
      },
      theme: getthemeFromStorage(),
      tags: getTagsFromStorage(),
      settingsModalOpen: false,
    };
  },
  mutations: {
    [FETCH_IMAGE_REQUEST](state: any) {
      state.images.isFetching = true;
      state.images.errorMessage = '';

      state.images.activeImageRank = null;
    },
    [FETCH_IMAGE_SUCCESS](state, image) {
      const dataLength = state.images.data.length;
      state.images.isFetching = false;
      state.images.errorMessage = '';

      state.images.data.push(image);

      state.images.activeImageRank = dataLength;
    },
    [FETCH_IMAGE_FAILURE](state, errorMessage = '') {
      state.images.isFetching = false;
      state.images.errorMessage = errorMessage;
    },
    [TOGGLE_SETTINGS_MODAL](state) {
      state.settingsModalOpen = !state.settingsModalOpen;
    },
    [UPDATE_SEARCH_TAGS](state, tags = []) {
      state.tags = tags;
      updateStorage({ tags });
    },
    [SET_THEME](state, isDarkTheme = false) {
      const theme = isDarkTheme ? 'dark' : 'light';
      state.theme = theme;
      updateStorage({ theme });
    },
  },
  actions: {
    fetchImage({ state, commit }, payload) {
      if (state.images.isFetching) {
        return;
      }

      commit(FETCH_IMAGE_REQUEST);

      imageApi
        .fetchImage({ tags: state.tags })
        .then((res: any) => {
          if (res && res.url) {
            if (payload && payload.firstLoad) {
              commit(FETCH_IMAGE_SUCCESS, res.url);
            } else {
              setTimeout(() => {
                commit(FETCH_IMAGE_SUCCESS, res.url);
              }, 2000);
            }
          } else {
            commit(FETCH_IMAGE_FAILURE, 'No image found');
          }
        })
        .catch((err: any) => {
          commit(FETCH_IMAGE_FAILURE, createError(err));
        });
    },
    saveSettings({ commit }, { tags = '', isDarkTheme = false }) {
      const tagsArray = textToArray(tags, ',');

      commit(UPDATE_SEARCH_TAGS, tagsArray);
      commit(SET_THEME, isDarkTheme);

      applyThemeToBody(isDarkTheme);
    },
    toggleSettingsModal({ commit }) {
      commit(TOGGLE_SETTINGS_MODAL);
    },
  },
});

export default store;
