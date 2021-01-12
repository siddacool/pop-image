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
          />
        </GridItem>
        <GridItem lg="7"> </GridItem>
      </GridRow>
      <GridRow>
        <GridItem>
          <Button @click="handleSave">Save Settings</Button>
        </GridItem>
      </GridRow>
    </Grid>
  </Modal>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { getTags, getIsSettingsModalOpen } from '../store/getters';

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
    const tagsStore = ref(getTags(store).join(','));

    const handleOpenSettings = () => {
      store.dispatch('toggleSettingsModal');
      tagsStore.value = getTags(store).join(',');
    };

    const handleCloseSettings = () => {
      store.dispatch('toggleSettingsModal');
      tagsStore.value = getTags(store).join(',');
    };

    const handleSave = () => {
      // store.dispatch('toggleSettingsModal');
      // store.dispatch('fetchImage');
    };

    const changeTags = (e: { target: { value: string } }) => {
      tagsStore.value = e.target.value;
    };

    return {
      isModalOpen: computed(() => getIsSettingsModalOpen(store)),
      handleOpenSettings,
      handleCloseSettings,
      handleSave,
      tags: tagsStore,
      changeTags,
    };
  },
});
</script>
