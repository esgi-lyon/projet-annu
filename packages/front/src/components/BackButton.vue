<template>
  <div class="my-2">
    <v-btn icon fab dark small rounded color="primary" @click="returnTranscript">
      <v-icon small dark>mdi-arrow-left</v-icon>
    </v-btn>
  </div>
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
