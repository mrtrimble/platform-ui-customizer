<script setup>
import { computed, reactive } from "vue";
import { useColorStore } from "../stores/colors";
import PlatformColorCard from "../components/ui/PlatformColorCard.vue";
import PlatformAddColorModal from "../components/ui/PlatformAddColorModal.vue";

const state = reactive({
  isAddingColor: false,
  selectedCategory: null,
});

const colorStore = useColorStore();
const brandColors = computed(() => colorStore.colors.brand);
const greyscaleColors = computed(() => colorStore.colors.greyscale);
const errorColors = computed(() => colorStore.colors.error);
const messageColors = computed(() => colorStore.colors.message);

const openAddColorModal = (category) => {
  state.selectedCategory = category;
  state.isAddingColor = true;
}
const closeAddColorModal = () => state.isAddingColor = false;
const removeColor = (index, category) => {
  colorStore.removeColor(index, category);
};
</script>

<template>
  <div>
    <h1>Colors</h1>
    <section class="background-white mb-4">
      <div class="flex flex--align-center mb-2">
        <h2 class="p-0 mb-0">Brand</h2>
        <div class="mx-2">
          <button class="button" @click="openAddColorModal('brand')">Add</button>
        </div>
      </div>
      <div class="block-container tablet-up-2 laptop-up-4 mb-4">
        <PlatformColorCard
          v-for="(color, index) in brandColors"
          :key="color.name + color.value"
          :color="color"
          category="brand"
          @remove="removeColor(index, 'brand')"
        />
      </div>
    </section>
    <section class="background-white mb-4">
      <div class="flex flex--align-center mb-2">
        <h2 class="p-0 mb-0">Greyscale</h2>
        <div class="mx-2">
          <button class="button" @click="openAddColorModal('greyscale')">Add</button>
        </div>
      </div>
      <div class="block-container tablet-up-2 laptop-up-4 mb-4">
        <PlatformColorCard
          v-for="(color, index) in greyscaleColors"
          :key="index"
          category="greyscale"
          :color="color"
          @remove="removeColor(index, 'greyscale')"
        />
      </div>
    </section>
    <section class="background-white mb-4">
      <div class="flex flex--align-center mb-2">
        <h2 class="p-0 mb-0">Error</h2>
        <div class="mx-2">
          <button class="button" @click="openAddColorModal('error')">Add</button>
        </div>
      </div>
      <div class="block-container tablet-up-2 laptop-up-4 mb-4">
        <PlatformColorCard
          v-for="(color, index) in errorColors"
          :key="index"
          category="error"
          :color="color"
          @remove="removeColor(index, 'error')"
        />
      </div>
    </section>
    <section class="background-white mb-4">
      <div class="flex flex--align-center mb-2">
        <h2 class="p-0 mb-0">Message</h2>
        <div class="mx-2">
          <button class="button" @click="openAddColorModal('message')">Add</button>
        </div>
      </div>
      <div class="block-container tablet-up-2 laptop-up-4 mb-4">
        <PlatformColorCard
          v-for="(color, index) in messageColors"
          :key="index"
          category="message"
          :color="color"
          @remove="removeColor(index, 'message')"
        />
      </div>
    </section>
  </div>
  <Teleport to="#teleport" v-if="state.isAddingColor">
    <PlatformAddColorModal
      :category="state.selectedCategory"
      @close="closeAddColorModal"
    />
  </Teleport>
</template>