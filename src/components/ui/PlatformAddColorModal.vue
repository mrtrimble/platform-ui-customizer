<script setup>
import { toRefs, reactive, computed } from "vue";
import { useColorStore } from "../../stores/colors";

const colorStore = useColorStore();

const props = defineProps({
  category: String,
});

const { category } = toRefs(props);

const emit = defineEmits(["close"]);

const state = reactive({
  newColor: {
    name: null,
    value: null,
  },
});

const addBtnDisabled= computed(
  () => !!state.newColor.name && !!state.newColor.value
);

const addColor = () => {
  colorStore.addColor(state.newColor, category.value);
  emit("close");
};

const closeAddColorModal = () => {
  state.newColor.name = null;
  state.newColor.value = null;
  emit("close");
};
</script>

<template>
  <div class="modal animated fadeIn fastest">
    <div class="modal__inner">
      <div class="modal__header">
        <h2>Add {{ category }} color</h2>
        <button
          class="button modal__close"
          @click="closeAddColorModal"
          data-modal="default-modal"
        >
          Close
          <i class="pi-times"></i>
        </button>
      </div>
      <div class="modal__content">
        <form @submit.prevent="addColor" class="form w-50">
          <label for="color-name" class="form__field mb-3">
            Color Name
            <input
              id="color-name"
              type="text"
              placeholder="Black"
              required
              v-model="state.newColor.name"
            />
          </label>
          <label for="color-name" class="form__field mb-3">
            Color Value <br />
            <div class="flex flex--align-center">
              <input
                type="color"
                @change="updateDisplayColor"
                required
                v-model="state.newColor.value"
              />
              <input
                type="text"
                @change="updateDisplayColor"
                v-model="state.newColor.value"
                placeholder="#000000"
                required
                pattern="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
              />
            </div>
          </label>
          <input
            type="submit"
            value="Save"
            class="button"
            :disabled="!addBtnDisabled"
          />
        </form>
      </div>
    </div>
  </div>
</template>