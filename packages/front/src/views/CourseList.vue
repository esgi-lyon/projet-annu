<template>
  <CourseItem
    v-for="course in courses"
    v-bind="{ ...course }"
    :key="course.id"
  >
  </CourseItem>
</template>

<script lan="ts">
import CourseItem from '../components/CourseItem.vue'
import api from '../services/api'
import { defineComponent } from "vue";

export default defineComponent({
  name: 'CourseList',
  components: { CourseItem },
  data() {
    return {
      courses: null,
      dates: null,
      menu: '',
    }
  },
  mounted() {
    this.$data.courses = this.getCourses()
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
</style>
