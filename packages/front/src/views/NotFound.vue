<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-1 font-weight-bold mb-3">404 Not Found</h1>

        <p class="subheading font-weight-regular">
          <BackButton/>
          <span>Retour</span>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BackButton from '../components/BackButton.vue'

export default {
  name: 'NotFound',
  components: { BackButton }
}
</script>
