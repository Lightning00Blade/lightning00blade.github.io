<script setup lang="ts">
import { ref } from 'vue';
import {RouterLink} from 'vue-router';
const links = [{
  anchor: '/#',
  title: 'Home'
},
{
  anchor: '/#portfolio',
  title:'Portfolio'
},{
  anchor: '/cv',
  title: 'CV'
}];

</script>

<template>
  <nav>
    <ul>
      <li v-for="link in links">
        <RouterLink :to="link.anchor">{{ link.title }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>
