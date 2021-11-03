import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => {
    return {
      sassPanelOpen: false,
    };
  },
  actions: {
    toggleSassPanel() {
      this.sassPanelOpen = !this.sassPanelOpen;
    }
  }
});
