<template>
  <v-container>
    <h3>Formation : {{ course.name }} | </h3>
    <v-row>
      <v-col sm="6">
        <div class="pa-10 js-transcripts-course-container">
          <BackButton/>
          <v-card class="mx-auto mt-6 text-center">
            <v-card-title primary-title class="py-5 mb-3 justify-center bg-grey">

            </v-card-title>
            <div class="justify-center">
              <span v-for="(item, index) in course.tags"
                :key="item._id"
                :index="index"
                class="mx-2"
              >
                <v-btn class="ma-2" text variant="outlined" color="indigo">{{ item }}</v-btn>
              </span>
            </div>
            <p class="fc-black pa-10">
              {{ course.desc }}
            </p>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "../services/api";
import BackButton from './BackButton.vue'
import { defineComponent } from "vue";

export default defineComponent({
  name: "CourseDetails",
  components: { BackButton },
  data() {
    return {
      course: {
        name: '',
        desc: '',
        tags: []
      },
    };
  },

  async mounted() {
    this.course = Object.freeze(await this.getCourse(this.$route.params.id));
    console.log(this.course)
  },
  methods: {
    async getCourse(id) {
      return (await api.get(`/courses/${id}`)).data[0] ?? this.course;
    },
    generator: function(){
      this.mycolor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      document.body.style.background = this.mycolor;
    }
  },
});
</script>

<style scoped>
.live {
  color: rgb(244, 67, 54);
}
.js-transcripts-course-edit-card {
  height: 100%;
  background-color: gainsboro;
}
.js-transcripts-course-container {
  height: 100%;
  position: relative;
}
.fc-black {
  color: black !important;
}
</style>
