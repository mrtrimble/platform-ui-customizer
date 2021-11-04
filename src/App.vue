<script setup>
// Vue Stuff!
import { computed } from "vue";

// Components
import PlatformHeader from "./components/layout/PlatformHeader.vue";
import PlatformSidebar from "./components/layout/PlatformSidebar.vue";
import PlatformSassPanel from "./components/ui/PlatformSassPanel.vue";

// Main Store properties
import { useStore } from "./stores/main";
const store = useStore();
const sassPanelOpen = computed(() => store.sassPanelOpen);
</script>

<template>
  <PlatformHeader />

  <!-- Main Content goes here! -->
  <main class="main-content block-container w-100">
    <PlatformSidebar />
    <article class="content px-4 py-2 w-100 lg-tablet-up-10">
      <router-view />
    </article>
  </main>
    <Teleport v-if="sassPanelOpen" to="#teleport">
      <PlatformSassPanel />
    </Teleport>
</template>

<style>
:root {
  --header-height: 4.5rem;
}
body {
  overflow: hidden;
}
.main-content {
  height: 100vh;
  overflow-y: auto;
  align-items: stretch;
}

.content {
  position: relative;
  top: var(--header-height);
}

.sidebar {
  height: calc(100vh - var(--header-height));
  box-shadow: 3px 3px 5px 0 var(--light-mid);
  position: sticky;
  top: var(--header-height);
}
</style>
