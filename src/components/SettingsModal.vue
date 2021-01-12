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
            placeholder="e.g. landcspe"
            message="Control image search with tags"
            :value="tags"
            @input="changeTags"
            :disabled="loading"
          />
        </GridItem>
        <GridItem lg="7"> </GridItem>
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
import { getTags, getIsSettingsModalOpen } from '../store/getters';
import { arryToText } from '../helpers/utils';

import Button from './Button.vue';
import Modal from './Modal.vue';
import Grid from './Grid.vue';
import GridRow from './GridRow.vue';
import GridItem from './GridItem.vue';
import TagInput from './TagInput.vue';

export default defineComponent({
  name: 'SettingsModal',
  components: {
    Button,
    Modal,
    Grid,
    GridRow,
    GridItem,
    TagInput,
  },
  setup() {
    const store = useStore();
    const tagsStore = ref(arryToText(getTags(store), ', '));
    const loading = ref(false);

    const handleCloseSettings = () => {
      store.dispatch('toggleSettingsModal');
      tagsStore.value = arryToText(getTags(store), ', ');
    };

    const handleSave = () => {
      loading.value = true;

      const config = { tags: tagsStore.value };
      store.dispatch('saveSettings', config);

      setTimeout(() => {
        loading.value = false;
      }, 500);
    };

    const changeTags = (e: { target: { value: string } }) => {
      tagsStore.value = e.target.value;
    };

    return {
      isModalOpen: computed(() => getIsSettingsModalOpen(store)),
      handleCloseSettings,
      handleSave,
      tags: tagsStore,
      changeTags,
      loading,
    };
  },
});
</script>
