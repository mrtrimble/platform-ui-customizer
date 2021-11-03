<script setup>
import { computed } from "vue";
import { useStore } from "../../stores/main";
import { useColorStore } from "../../stores/colors";
import { useSpacingStore } from "../../stores/spacing";

const store = useStore();
const colorStore = useColorStore();
const spaceStore = useSpacingStore();

const colors = computed(() => colorStore.colors);
const spacing = computed(() => spaceStore.spacing);

const brandColorTemplate = computed(() => {
  let colorTemplate = `$brand-colors: (\n`;
  colors.value.brand.forEach((color) => {
    colorTemplate += `  $${color.name
      .toLowerCase()
      .replace(/\s+/g, "-")}: ${color.value.toUpperCase()}, \n`;
  });
  colorTemplate += `) !default;\n\n`;
  return colorTemplate;
});

const greyscaleColorTemplate = computed(() => {
  let colorTemplate = `$greyscale-colors: (\n`;
  colors.value.greyscale.forEach((color) => {
    colorTemplate += `  $${color.name.toLowerCase()}: ${color.value.toUpperCase()}, \n`;
  });
  colorTemplate += `) !default;\n\n`;
  return colorTemplate;
});

const errorColorTemplate = computed(() => {
  let colorTemplate = `$error-colors: (\n`;
  colors.value.error.forEach((color) => {
    colorTemplate += `  $${color.name.toLowerCase()}: ${color.value.toUpperCase()}, \n`;
  });
  colorTemplate += `) !default;\n\n`;
  return colorTemplate;
});

const messageColorTemplate = computed(() => {
  let colorTemplate = `$message-colors: (\n`;
  colors.value.message.forEach((color) => {
    colorTemplate += `  $${color.name.toLowerCase()}: ${color.value.toUpperCase()}, \n`;
  });
  colorTemplate += `) !default;\n\n`;
  return colorTemplate;
});

const spacingTemplate = computed(()=> {
  let spaceTemplate = `$spacer: 1rem;\n\n$spacing: (\n`;
  spacing.value.forEach(space => {
    spaceTemplate += `  ${space.name}: ($spacer * ${space.value}), \n`;
  })
  spaceTemplate += `);\n\n`
  return spaceTemplate;
})

const code = computed(() => {
  let code = `// Colors\n`;
  code += brandColorTemplate.value;
  code += greyscaleColorTemplate.value;
  code += errorColorTemplate.value;
  code += messageColorTemplate.value;
  code += `\n// Spacing\n`;
  code += spacingTemplate.value;
  return code;
});

const toggleSassPanel = () => store.toggleSassPanel();
</script>

<template>
  <div id="right" class="drawer drawer-right animated slideInRight fastest">
    <div class="drawer__inner">
      <div class="drawer__content">
        <div class="flex flex--justify-between">
          <h2>SCSS Config</h2>
          <div>
            <button
              @click="toggleSassPanel"
              class="button drawer__close"
              data-drawer="right"
            >
              Close
              <i class="pi-times"></i>
            </button>
          </div>
        </div>
        <div class="block-container">
          <highlightjs class="h-75 w-100 my-3" language="sass" :code="code" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.drawer {
  z-index: 100;
}
</style>