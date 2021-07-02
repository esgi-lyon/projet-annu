<template>
  <div>
    <FOCourseDetails />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FOCourseDetails from "../components/FOCourseDetails.vue"

export default defineComponent({
    name: "Add",
    components: { FOCourseDetails }
});
</script>
