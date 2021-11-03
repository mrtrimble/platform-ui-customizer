<script setup>
import { toRefs, reactive } from "vue";
import { useColorStore } from "../../stores/colors";

const colorStore = useColorStore();

const emit = defineEmits(["remove"]);

const props = defineProps({
  color: Object,
  category: String,
});

const { color } = toRefs(props);
const { category } = toRefs(props);

const state = reactive({
  isEditing: false,
  colorName: color.value.name,
  colorValue: color.value.value,
  newColor: {
    name: "White",
    value: "#FFFFFF",
  },
});

const toggleEditing = () => (state.isEditing = !state.isEditing);
const updateDisplayColor = (event) => (state.colorValue = event.target.value);
const updateColor = (category, oldName, newName, newValue) =>
  colorStore.updateColor(category, oldName, newName, newValue);
const editColor = () => {
  updateColor(
    category.value,
    color.value.name,
    state.colorName,
    state.colorValue
  );
  toggleEditing();
};
const cancelEdit = () => {
  state.newColor.name = state.colorName;
  state.newColor.value = state.colorValue;
  toggleEditing();
};
const removeColor = () => emit("remove");
</script>

<template>
  <div class="block mb-3">
    <div class="card p-0 mx-2">
      <div
        class="color-viewer pos-rel"
        :aria-labelledby="`color-${state.colorName}`"
        :style="`--background:${state.colorValue}`"
      ></div>
      <div class="card-content p-3">
        <form v-if="state.isEditing" @submit.prevent="editColor" class="form">
          <label for="color-name" class="form__field mb-3">
            Color Name
            <input
              id="color-name"
              type="text"
              :placeholder="state.colorName"
              v-model="state.colorName"
            />
          </label>
          <label for="color-name" class="form__field mb-3">
            Color Value <br />
            <div class="flex flex--align-center">
              <input
                type="color"
                @change="updateDisplayColor"
                v-model="state.colorValue"
              />
              <input
                type="text"
                @change="updateDisplayColor"
                v-model="state.colorValue"
                pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
              />
            </div>
          </label>
          <div class="flex flex--justify-center">
            <!-- fix cancel button!! -->
            <!-- <button @click.prevent="cancelEdit" class="button mr-2">Cancel</button> -->
            <input type="submit" value="Save" class="button background-salmon text-white" />
          </div>
        </form>
        <div v-else class="flex flex--justify-between">
          <div class="flex flex--column">
            <h4 :id="`color-${state.colorName}`">{{ state.colorName }}</h4>
            <p>{{ state.colorValue }}</p>
          </div>
          <div class="flex flex--column flex--align-end w-25">
            <div class="icon-menu icon-menu--vertical">
              <div class="icon-menu__item">
                <button
                  class="icon-menu__action"
                  aria-label="Edit Color"
                  @click="toggleEditing"
                >
                  <i class="pi-edit" aria-hidden="true"></i>
                </button>
              </div>
              <div class="icon-menu__item">
                <button
                  class="icon-menu__action"
                  aria-label="Delete Color"
                  @click="removeColor"
                >
                  <i class="pi-trash" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.color-viewer {
  height: 150px;
  background: var(--background);
}
.icon-menu__action {
  background: transparent;
  border: none;
}
</style>