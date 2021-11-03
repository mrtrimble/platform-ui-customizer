<script setup>
import { toRefs, reactive, computed } from "vue";
import { useSpacingStore } from "../../stores/spacing";
const spaceStore = useSpacingStore();

const props = defineProps({
  space: Object,
});

const { space } = toRefs(props);

const state = reactive({
  isEditing: false,
  spaceName: space.value.name,
  spaceValue: space.value.value,
});

const saveDisabled = computed(() => {
  return !state.spaceName?.length && !state.spaceValue?.length;
});

const toggleEditing = () => (state.isEditing = !state.isEditing);

const updateSpace = () => {
  if (state.spaceName.length && state.spaceValue.length) {
    if (!isNaN(state.spaceValue)) {
      spaceStore.editSpace(space.value.name, {
        name: state.spaceName,
        value: state.spaceValue,
      });
    } else {
      state.spaceName = space.value.name;
      state.spaceValue = space.value.value;
    }
  }
};
const editSpace = () => {
  updateSpace();
  toggleEditing();
};
const removeSpace = () => {
  spaceStore.removeSpace(space.value);
};
</script>

<template>
  <div class="space-card text-base">
    <div class="space-card__content w-100" v-if="state.isEditing">
      <form
        @submit.prevent="editSpace"
        class="space-card__form form w-100 flex flex--justify-between"
      >
        <div class="flex">
          <label for="name">
            Space Name
            <input
              type="text"
              name="name"
              id="name"
              v-model="state.spaceName"
            />
          </label>
          <label for="name">
            Space Value
            <input
              type="text"
              name="value"
              id="value"
              v-model="state.spaceValue"
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
    <template v-else>
      <div class="space-card__content">
        <div class="space-card__label">
          <strong class="text--size-xl">
            {{ state.spaceName }}
          </strong>
        </div>
        <div
          class="space-card__viewer"
          :style="`--space-width:${state.spaceValue}rem`"
        >
          <span> {{ state.spaceValue }}rem </span>
        </div>
      </div>
      <div class="space-card__actions">
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
              @click="removeSpace"
            >
              <i class="pi-trash" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </template>
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
  position: relative;
  &:hover {
    background: var(--lighter);
  }
  &:last-child {
    border: none;
  }
  &__content {
    display: flex;
    position: relative;
    width: 100%;
  }
  &__form {
    box-sizing: border-box;
    padding: 0 1rem;
    gap: 0.5rem;
    div {
      gap: 0.5rem;
    }
  }
  &__label {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    min-width: 3rem;
    padding: 0 1rem;
  }
  &__viewer {
    display: flex;
    align-items: center;
    height: 3rem;
    width: 100%;
    overflow: hidden;
    position: relative;
    &::after {
      content: "";
      height: 100%;
      width: 100%;
      position: absolute;
      width: var(--space-width);
      background: var(--salmon);
    }
    span {
      padding: 0 1rem;
      position: absolute;
      z-index: 10;
    }
  }
  &__actions {
    flex: 1;
    padding: 0 1rem;
    .icon-menu__action {
      background: transparent;
      border: none;
    }
  }
}
</style>