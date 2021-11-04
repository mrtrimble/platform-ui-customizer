<script setup>
import { computed } from "vue";
import { useTypographyStore } from "../stores/typography";
import PlatformTypographyHeaders from "../components/ui/PlatformTypographyHeaders.vue";

const typographyStore = useTypographyStore();

const headers = computed(() => typographyStore.headers);
</script>

<template>
  <div>
    <h1>Typography</h1>
    <section class="background-white mb-4">
      <h2>Headers</h2>
      <PlatformTypographyHeaders :headers="headers" />
    </section>

    <section class="background-white mb-4">
      <h2>Text Sizes</h2>
      <!-- Default Size -->
      <!-- Size Utilities -->
    </section>

    <section class="background-white mb-4">
      <h2>Color</h2>
      <!-- Default font color -->
    </section>
    <section class="background-white mb-4">
      <h2>Fonts</h2>
      <!-- Font Familes: Headers, Default, code -->
    </section>
    <section class="background-white mb-4">
      <h2>Line Heights</h2>
      <!-- Headers, Base -->
    </section>
  </div>
</template>


<style lang="scss" scoped>
</style>