<template>
  <v-navigation-drawer app>
    <v-list-item>
      <v-list-item-title class="title">
        Formation Back-office
      </v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        router
        :to="item.url"
      >
        <v-list-item-avatar v-if="item.icon">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-avatar>
        <v-list-item>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list-item>
    </v-list>
    <!-- <template #append>
      <v-btn
        medium
        fab
        class="ml-4 my-4"
        @click="$store.dispatch('theme/toggle')"
      >
        <v-icon>mdi-weather-night</v-icon>
      </v-btn>
    </template> -->
  </v-navigation-drawer>
</template>
<script>
import { parseMenu } from "../router/parseMenu";
import router from "../router";

export default {
  name: "Navbar",
  data() {
    return {
      items: parseMenu(router),
      right: null,
    };
  },
};
</script>

<style scoped></style>
