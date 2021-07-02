<template>
  <v-col cols="12" :sm="sm" >
    <v-card class="mx-auto text-center">
      <v-card-title primary-title class="justify-center">
        {{ item.name }}
      </v-card-title>
      <v-card-text>
        {{ item.tags }}
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn flat small color="primary" link :to="`/fo/${item._id}`">
          Consulter
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import api from "../services/api";
import { defineComponent } from "vue";

export default defineComponent({
  name: "FOCourseItem",
  props: {
    sm: {
      type: Number,
      default: () => 4
    },
    item: {
      type: Object,
      default: () => ({
        desc: "",
        tags: [],
        name: ""
      })
    }
  },
  data() {
    return {
      live: null,
      icon: "mdi-eye",
      content: "",
    };
  },
});
</script>

<style scoped>

.js-transcripts-course-edit-card {
  height: 100%;
  background-color: gainsboro;
}
.js-transcripts-course-container {
  height: 100%;
  position: relative;
  margin-top: 1rem;
}
.fc-black {
  color: black !important;
}
</style>
