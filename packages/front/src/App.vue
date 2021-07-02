<template>
  <v-app>
    <v-main>
      <NavBar v-if="$router.currentRoute._value.fullPath.includes('admin')"/>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import NavBar from './components/NavBar.vue'

</script>
