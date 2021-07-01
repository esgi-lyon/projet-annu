<template>
  <v-btn class="mx-2" fab dark small color="primary" @click="returnTranscript">
    <v-icon dark>mdi-arrow-left</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BackButton",
  methods: {
    returnTranscript() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
});
</script>
