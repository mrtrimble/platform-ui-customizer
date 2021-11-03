<script setup>
import { reactive, computed } from "vue";
import { useSpacingStore } from "../../stores/spacing";

const spaceStore = useSpacingStore();

const state = reactive({
  isAdding: false,
  newSpace: {
    name: null,
    value: null,
  },
});

const toggleAdding = () => {
  resetSpace();
  state.isAdding = !state.isAdding;
};

const resetSpace = () => {
  state.newSpace = {
    name: null,
    value: null,
  };
};

const valueIsNumber = computed(()=> !isNaN(state.newSpace.value));

const saveDisabled = computed(() => {
  return !state.newSpace.name?.length && !state.newSpace.value?.length && valueIsNumber.value;
});

const addSpace = () => {
  if (state.newSpace.name.length && state.newSpace.value.length) {
    spaceStore.addSpace(state.newSpace);
    toggleAdding();
  }
};
</script>

<template>
  <div class="space-card">
    <div class="space-card__content w-100" v-if="state.isAdding">
      <form
        @submit.prevent="addSpace"
        class="space-card__form form w-100 flex flex--justify-between"
      >
        <div class="flex">
          <label for="name">
            Space Name
            <input
              type="text"
              name="name"
              id="name"
              v-model="state.newSpace.name"
            />
          </label>
          <label for="name">
            Space Value
            <input
              type="text"
              name="value"
              id="value"
              v-model="state.newSpace.value"
            />
          </label>
        </div>
        <div class="flex flex--align-center">
          <input
            type="submit"
            value="Save"
            :disabled="saveDisabled"
            class="button background-salmon text-white"
          />
        </div>
      </form>
    </div>
    <div class="space-card__content w-100" v-else>
      <div
        class="
          space-card__add
          w-100
          flex flex--align-center flex--justify-center
        "
      >
        <button class="button" @click="toggleAdding">Add</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.space-card {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--lighter);
  &:last-child {
    border: none;
  }
  &__content {
    display: flex;
  }
  &__add {
    height: 3rem;
  }
  &__form {
    box-sizing: border-box;
    padding: 0 1rem;
    gap: 0.5rem;
    div {
      gap: 0.5rem;
    }
  }
  &__actions {
    .icon-menu__action {
      background: transparent;
      border: none;
    }
  }
}
</style>