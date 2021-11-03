<script setup>
import { useStore } from "../../stores/main";

const store = useStore();
const toggleSassPanel = () => store.toggleSassPanel();
</script>

<template>
  <header
    id="main-header"
    class="
      site-menu-wrapper site-header site-header--fixed
      background-navy
      p-3
      flex--align-center flex--justify-start
    "
  >
    <a href="/" class="site-logo mr-3">
      <img src="/images/platform-ui.svg" alt="Platform UI" />
    </a>
    <!-- <button
      class="
        site-menu-mobile-action
        button--plain
        text-white
        pos-abs
        pin-right pin-center-top
        mr-3
      "
    >
      <span class="sr-only">Toggle Navigation</span>
      <i aria-hidden="true" focusable="false" class="pi-menu pi-xl"></i>
    </button> -->
    <nav class="site-menu hover-underline hover-underline--white text-white">
      <a href="/" class="site-menu__item text--nowrap active"> Customize Platform UI </a>
    </nav>
    <div class="block-container w-100">
      <div
        class="
          w-100
          text-white
          flex flex--justify-end flex--align-center
        "
      >
        <a
          href="https://rimdev.io"
          class="mr-3 text-white"
          title="RIMdev Blog"
          aria-label="RIMdev Blog"
        >
          <i class="pi-rimdev-circle pi-xl" aria-hidden="true"></i>
        </a>
        <button @click="toggleSassPanel" class="button button--post">
          Open Config
        </button>
      </div>
    </div>
  </header>
</template>
