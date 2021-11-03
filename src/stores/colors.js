import { defineStore } from 'pinia';

export const useColorStore = defineStore('color', {
  state: () => {
    return {
      colors: {
        brand: [
          {
            name: 'Navy',
            value: '#003f70',
          },
          {
            name: 'Skyblue',
            value: '#91b9dc',
          },
          {
            name: 'Lightblue',
            value: '#E5F5FF',
          },
          {
            name: 'Med-blue',
            value: '#3f7bad',
          },
          {
            name: 'Beige',
            value: '#ecd7b1',
          },
          {
            name: 'Peach',
            value: '#dfa278',
          },
          {
            name: 'Salmon',
            value: '#e58967',
          },
          {
            name: 'Brown',
            value: '#866657',
          },
          {
            name: 'Orange',
            value: '#f48418',
          },
        ],
        error: [
          {
            name: 'Positive',
            value: '#b5cc18',
          },
          {
            name: 'Neutral',
            value: '#999999',
          },
          {
            name: 'Negative',
            value: '#FF6346',
          },
        ],
        greyscale: [
          {
            name: 'White',
            value: '#FFFFFF',
          },
          {
            name: 'Lighter',
            value: '#efefef',
          },
          {
            name: 'Light',
            value: '#efefef',
          },
          {
            name: 'Base',
            value: '#666666',
          },
          {
            name: 'Dark',
            value: '#333333',
          },
          {
            name: 'Black',
            value: '#222222',
          },
        ],
        message: [
          {
            name: 'Info',
            value: '#91b9dc',
          },
          {
            name: 'Warning',
            value: '#ffeeba',
          },
          {
            name: 'Error',
            value: '#ffe5e0',
          },
          {
            name: 'Success',
            value: '#d4edda',
          },
        ],
      },
    };
  },
  actions: {
    updateColor(category, oldName, newName, newValue) {
      const index = this.colors[category].findIndex((color) => color.name === oldName);
      this.colors[category][index].name = newName;
      this.colors[category][index].value = newValue;
    },
    addColor(color, category) {
      console.log(color);
      this.colors[category].push(color);
    },
    removeColor(index, category) {
      this.colors[category].splice(index, 1);
    },
  },
});
