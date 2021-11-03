<template>
  <aside
    role="sidebar"
    class="sidebar hide-lg-tablet-down tablet-up-3 lg-tablet-up-2"
  >
    <nav>
      <ul class="sidebar-menu list active">
        <li class="accordion no-border mb-0">
          <router-link
            :to="{ name: 'Getting Started' }"
            class="text-base text--size-md accordion__header py-2 px-3 mb-0"
          >
            Getting Started
          </router-link>
        </li>

        <li class="accordion no-border mb-0">
          <router-link
            :to="{ name: 'Colors' }"
            class="text-base text--size-md accordion__header py-2 px-3 mb-0"
          >
            Colors
          </router-link>
        </li>

        <li class="accordion no-border mb-0">
          <router-link
            :to="{ name: 'Spacing' }"
            class="text-base text--size-md accordion__header py-2 px-3 mb-0"
          >
            Spacing
          </router-link>
        </li>

        <li class="accordion no-border mb-0">
          <router-link
            :to="{ name: 'Typography' }"
            class="text-base text--size-md accordion__header py-2 px-3 mb-0"
          >
            Typography
          </router-link>
        </li>

        <li class="accordion no-border mb-0">
          <router-link
            :to="{ name: 'Icons' }"
            class="text-base text--size-md accordion__header py-2 px-3 mb-0"
          >
            Icons
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>