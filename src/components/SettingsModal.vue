<template>
  <Modal
    title="Settings"
    :isModalOpen="isModalOpen"
    @modalClose="handleCloseSettings"
  >
    <Grid>
      <GridRow>
        <GridItem lg="7">
          <TagInput
            name="search-tags"
            label="Search Tags"
            placeholder="Comma separated values e.g. land, city"
            message="Control image search with tags"
            :value="tags"
            @input="changeTags"
            :disabled="loading"
          />
        </GridItem>
      </GridRow>
      <GridRow>
        <GridItem lg="7">
          <Checkbox
            name="theme-selector"
            label="Dark Theme"
            @change="handleThemeChange"
            :checked="isDarkTheme"
          />
        </GridItem>
      </GridRow>
      <GridRow>
        <GridItem>
          <Button @click="handleSave" :disabled="loading">Save Settings</Button>
        </GridItem>
      </GridRow>
    </Grid>
  </Modal>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { getTags, getIsSettingsModalOpen, getTheme } from '../store/getters';
import { arryToText } from '../helpers/utils';

import Button from './Button.vue';
import Modal from './Modal.vue';
import Grid from './Grid.vue';
import GridRow from './GridRow.vue';
import GridItem from './GridItem.vue';
import TagInput from './TagInput.vue';
import Checkbox from './Checkbox.vue';

export default defineComponent({
  name: 'SettingsModal',
  components: {
    Button,
    Modal,
    Grid,
    GridRow,
    GridItem,
    TagInput,
    Checkbox,
  },
  setup() {
    const store = useStore();
    const tagsStore = ref(arryToText(getTags(store), ', '));
    const loading = ref(false);
    const quickImageFetch = ref(false);
    const theme = getTheme(store);
    const isDarkTheme = ref(theme === 'dark' ? true : false);

    const handleCloseSettings = () => {
      if (quickImageFetch.value) {
        store.dispatch('fetchImage');
        quickImageFetch.value = false;
      }

      const themeFresh = getTheme(store);
      store.dispatch('toggleSettingsModal');
      tagsStore.value = arryToText(getTags(store), ', ');
      isDarkTheme.value = themeFresh === 'dark' ? true : false;
    };

    const handleSave = () => {
      loading.value = true;

      const config = { tags: tagsStore.value, isDarkTheme: isDarkTheme.value };
      store.dispatch('saveSettings', config);
      quickImageFetch.value = true;

      setTimeout(() => {
        loading.value = false;
      }, 500);
    };

    const changeTags = (e: { target: { value: string } }) => {
      tagsStore.value = e.target.value;
    };

    const handleThemeChange = () => {
      isDarkTheme.value = !isDarkTheme.value;
    };

    return {
      isModalOpen: computed(() => getIsSettingsModalOpen(store)),
      handleCloseSettings,
      handleSave,
      tags: tagsStore,
      changeTags,
      loading,
      handleThemeChange,
      isDarkTheme,
    };
  },
});
</script>
