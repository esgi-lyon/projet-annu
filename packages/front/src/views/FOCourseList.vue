<template>
  <v-container>
    <h3 class="fo-title">Front office - Liste des formations</h3>
    <v-row class="mt-2">
      <FOCourseItem
        v-for="(item, index) in courses"
        :key="item._id"
        :item="item"
        :index="index"
      />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import FOCourseItem from '../components/FOCourseItem.vue'
import api from '../services/api'
import { defineComponent } from "vue";

export default defineComponent({
  name: 'FOCourseList',
  components: { FOCourseItem },
  data() {
    return {
      courses: null,
    }
  },
  async mounted() {
    this.courses = await this.getCourses()
  },
  methods: {
    async getCourses() {
      return (await api.get('/courses')).data
    },
  },
})
</script>

<style>
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.js-courses-datepicker {
  width: 50%;
}
.fo-title {
  color: white;
}
</style>
