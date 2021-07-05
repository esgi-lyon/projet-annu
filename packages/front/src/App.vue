<template>
  <v-app :class="{ 'font-office': !isAdmin }">
    <v-main>
      <NavBar v-if="isAdmin"/>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isAdmin = route.fullPath.includes('admin') || window.location.pathname.includes('admin');

</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&display=swap');

  html, body {
    font-family: 'Open Sans', sans-serif;
  }

  #app {
    font-family: 'Open Sans', sans-serif;
  }

  .font-office {
    background: rgb(4,159,219);
    background: linear-gradient(176deg, rgba(4,159,219,1) 0%, rgba(190,0,255,1) 100%);
  }
</style>
