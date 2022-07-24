<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const links = [
  {
    anchor: '/#',
    title: 'Home',
  },
  {
    anchor: '/#portfolio',
    title: 'Portfolio',
  },
  {
    anchor: '/cv',
    title: 'CV',
  },
];

const isMenuHidden = ref(true);

const toggleMenu = () => (isMenuHidden.value = !isMenuHidden.value);
</script>

<template>
  <nav class="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-800 sm:px-4">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <a href="https://lightning00blade.dev" class="flex items-center">
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Lightning00Blade</span>
      </a>
      <div class="flex items-center md:order-2">
        <!-- Dropdown menu -->
        <div class="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700" id="dropdown">
          <ul class="py-1" aria-labelledby="dropdown">
            <li v-for="link in links" :key="link.anchor">
              <RouterLink :to="link.anchor" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"> {{ link.title }}</RouterLink>
            </li>
          </ul>
        </div>
        <button @click="toggleMenu" data-collapse-toggle="mobile-menu-2" type="button" class="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden" aria-controls="mobile-menu-2" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          </svg>
          <svg class="hidden h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div :class="{ hidden: isMenuHidden }" class="w-full items-center justify-between md:order-1 md:flex md:w-auto" id="mobile-menu-2">
        <ul class="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
          <li v-for="link in links" :key="link.anchor">
            <RouterLink :to="link.anchor" class="mb-1 block rounded py-2 pr-4 pl-3 text-center text-white hover:bg-blue-700 dark:text-white md:bg-transparent md:p-0 md:text-blue-700" aria-current="page">{{ link.title }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
