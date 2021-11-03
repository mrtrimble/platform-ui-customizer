import { defineStore } from 'pinia';

export const useSpacingStore = defineStore('space', {
  state: () => {
    return {
      spacing: [
        {
          name: '0',
          value: '0',
        },
        {
          name: '1',
          value: '0.25',
        },
        {
          name: '2',
          value: '0.5',
        },
        {
          name: '3',
          value: '1',
        },
        {
          name: '4',
          value: '2',
        },
        {
          name: '5',
          value: '3',
        },
        {
          name: '6',
          value: '4.5',
        },
        {
          name: '7',
          value: '6.5',
        },
      ],
    };
  },
  actions: {
    editSpace(previousName, newSpace) {
      const index = this.spacing.findIndex(space => space.name === previousName);
      this.spacing[index] = {...newSpace};
    },
    addSpace(newSpace) {
      this.spacing.push(newSpace);
    },
    removeSpace(removeSpace) {
      const index = this.spacing.findIndex(space => space === removeSpace);
      this.spacing.splice(index, 1);
    },
  },
});
