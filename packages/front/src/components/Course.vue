<template>
  <div class="pa-10 js-transcripts-course-container">
    <BackButton/>
    <div v-if="status !== 'progress'">
      <v-card-text class="pa-6 fc-black">
        <a href="#">Text</a>
      </v-card-text>
      <v-card-text class="pa-6 fc-black">
        <a href="#">Audio</a>
      </v-card-text>
    </div>

    <v-card class="mx-auto" max-width="900">
      <div v-if="status === 'progress'" class="pa-6 live">
        <v-icon color="red">{{ icon }}</v-icon>
        <span><strong>Live</strong></span>
      </div>
      <p class="fc-black pa-10">
        {{ content }}
      </p>
    </v-card>
  </div>
</template>

<script>
import api from "../services/api";
import BackButton from './BackButton.vue'

export default {
  name: "Course",
  components: { BackButton },
  data() {
    return {
      status: "progress",
      uuid: "",
      live: null,
      icon: "mdi-eye",
      content: "",
    };
  },
  computed: {
    progressing() {
      return this.course.status === "progress";
    },
  },
  created() {
    this.getTranscript(this.$route.params.id).then(async (val) => {
      this.$data.status = val.status;
      this.$data._id = val._id;
    });
  },
  mounted() {},
  methods: {
    async getTranscript(id) {
      return this.course = (await api.get(`/courses/${id}`)).data;
    },
    transcriptPath: function (type) {
      if (!this.types.includes(type)) {
        return "#";
      }
      return process.env.VUE_APP_API + "/" + this.course[type];
    },
  },
};
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
