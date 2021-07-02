<template>
  <v-container>
    <v-row>
      <v-col sm="8">
        <h3>Calendrier</h3>
        <CourseCalendar />
      </v-col>
      <v-col sm=4>
        <h3 class="fo-title">Liste des formations</h3>
        <v-row class="mt-2">
          <CourseItem
            v-for="(item, index) in courses"
            :key="item._id"
            :item="item"
            :sm="12"
            :index="index"
          />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import CourseCalendar from '../components/CourseCalendar.vue'
import CourseItem from '../components/CourseItem.vue'
import api from '../services/api'
import { defineComponent } from "vue";

export default defineComponent({
  name: 'FOCourseList',
  components: { CourseItem, CourseCalendar },
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
