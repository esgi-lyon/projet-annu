<template>
  <div>
    <div class="js-courses-datepicker">
      <v-menu
        ref="menu"
        v-model="menu"
        v-model:return-value="dates"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template #activator="{ on, attrs }">
          <v-combobox
            v-model="dates"
            multiple
            chips
            small-chips
            label="Choisir une date"
            prepend-icon="event"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-combobox>
        </template>
        <v-date-picker v-model="dates" multiple no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Annuler</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(dates)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </div>
    <div class="box">
      <Course
        v-for="course in courses"
        v-bind="{ ...course }"
        :key="course.id"
      >
      </Course>
    </div>
  </div>
</template>

<script>
import Course from '../components/Course'
import api from '../services/api'

export default {
  name: 'CourseList',
  components: { Course },
  data() {
    return {
      transcripts: null,
      dates: null,
      menu: '',
    }
  },
  mounted() {
    this.getTranscripts()
  },
  methods: {
    async getTranscripts() {
      return (await api.get('/courses')).data
    },
  },
}
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