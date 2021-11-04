<script setup>
import { computed } from "vue";
import { useSpacingStore } from "../stores/spacing";
import PlatformSpaceCard from "../components/ui/PlatformSpaceCard.vue";
import PlatformAddSpaceCard from "../components/ui/PlatformAddSpaceCard.vue";

const spaceStore = useSpacingStore();
const spacing = computed(() => spaceStore.spacing);
</script>

<template>
  <div>
    <h1>Spacing</h1>
    <section class="spacing background-white mb-4">
      <PlatformSpaceCard
        v-for="(space, index) in spacing"
        :key="index"
        :space="space"
      />
      <PlatformAddSpaceCard />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.spacing {
  width: 100%;
  max-width: 500px;
}
</style>