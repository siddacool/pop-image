/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore } from 'vuex';
import {
  FETCH_IMAGE_REQUEST,
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_FAILURE,
  TOGGLE_SETTINGS_MODAL,
} from '../helpers/constants/actions';
import { createError } from '../helpers/utils';
import imageApi from '../api/image';

const store = createStore({
  state() {
    return {
      images: {
        isFetching: false,
        errorMessage: '',
        data: [],
        activeImageRank: null,
      },
      tags: ['landscape'],
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
  },
  actions: {
    fetchImage({ state, commit }) {
      if (state.images.isFetching) {
        return;
      }

      commit(FETCH_IMAGE_REQUEST);

      imageApi
        .fetchImage({ tags: state.tags })
        .then((res: any) => {
          if (res && res.url) {
            setTimeout(() => {
              commit(FETCH_IMAGE_SUCCESS, res.url);
            }, 100);
          } else {
            commit(FETCH_IMAGE_FAILURE, 'No image found');
          }
        })
        .catch((err: any) => {
          commit(FETCH_IMAGE_FAILURE, createError(err));
        });
    },
    saveSettings(context) {
      console.log(context);
    },
    toggleSettingsModal({ commit }) {
      commit(TOGGLE_SETTINGS_MODAL);
    },
  },
});

export default store;
